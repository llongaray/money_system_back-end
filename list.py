import os

def listar_arquivos_e_subpastas(caminho):
    lista_arquivos = []
    for pasta_raiz, subpastas, arquivos in os.walk(caminho):
        # Remova a pasta 'venv' da lista de subpastas
        if '.venv' in subpastas:
            subpastas.remove('.venv')
        # Remova a pasta '.git' da lista de subpastas
        if '.git' in subpastas:
            subpastas.remove('.git')
        for arquivo in arquivos:
            caminho_completo = os.path.join(pasta_raiz, arquivo)
            caminho_relativo = os.path.relpath(caminho_completo, caminho)
            lista_arquivos.append(caminho_relativo)
        for subpasta in subpastas:
            caminho_completo = os.path.join(pasta_raiz, subpasta)
            caminho_relativo = os.path.relpath(caminho_completo, caminho)
            lista_arquivos.append(caminho_relativo)
    return lista_arquivos

# Obtenha o diretório atual como caminho da pasta
caminho_da_sua_pasta = os.getcwd()

lista = listar_arquivos_e_subpastas(caminho_da_sua_pasta)

# Criando e escrevendo no arquivo txt
with open('lista_de_arquivos.txt', 'w') as arquivo_txt:
    for item in lista:
        arquivo_txt.write("%s\n" % item)

print("Arquivo 'lista_de_arquivos.txt' criado com sucesso!")
