## Money System 💰💻

O Money System é um projeto desenvolvido em Django para gerenciamento financeiro. Ele oferece recursos para ajudar na gestão de pagamentos, contas e outras transações financeiras.

### Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados em seu sistema:

- Python >= 3.x
- Django >= 3.x

### Instalação

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Crie um ambiente virtual (opcional, mas recomendado).
4. Ative o ambiente virtual (se aplicável).
5. Instale as dependências usando `pip install -r requirements.txt`.
6. Execute as migrações do banco de dados com `python manage.py migrate`.
7. Inicie o servidor de desenvolvimento com `python manage.py runserver`.
8. Abra seu navegador e acesse http://localhost:8000 para ver o projeto em execução.

### Estrutura do Projeto

O projeto segue a seguinte estrutura de diretórios:

```
Money System/
│
├── .env
├── .gitignore
├── db.sqlite3
├── list.py
├── lista_de_arquivos.txt
├── manage.py
├── apps/
│   ├── accounting/
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   ├── views.py
│   │   ├── migrations/
│   │   │   └── ...
│   ├── authentication/
│   │   └── ...
│   ├── dashboard/
│   │   └── ...
│   └── paymentmanager/
│       └── ...
├── media/
│   ├── files/
│   └── imgs/
│       ├── favicon.png
│       └── logo.png
└── setup/
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    ├── wsgi.py
    ├── __init__.py
    ├── static/
    │   ├── css/
    │   │   ├── dashboard/
    │   │   │   └── dashboard.css
    │   │   ├── financeiro/
    │   │   │   ├── pix_payment.css
    │   │   │   └── register_values.css
    │   │   ├── login/
    │   │   │   └── login.css
    │   │   ├── public/
    │   │   │   ├── general.css
    │   │   │   ├── lister.css
    │   │   │   └── menu.css
    │   │   └── register/
    │   │       └── register.css
    │   └── img/
    │   └── js/
    └── templates/
        ├── dashboard.html
        ├── login.html
        ├── pix.html
        ├── register_colab.html
        ├── register_values.html
        └── partials/
            ├── _base.html
            └── _menu.html
```

### Bibliotecas Utilizadas

- Django
- python-decouple
- python-dotenv

### Como Contribuir

Se desejar contribuir para este projeto, siga estas etapas:

1. Faça um fork do projeto.
2. Crie uma branch com sua feature.
3. Faça commit das suas alterações.
4. Faça push para a branch.
5. Abra um Pull Request.

### Licença

Este projeto é licenciado sob a Licença XYZ. Veja o arquivo `LICENSE` para mais detalhes.
