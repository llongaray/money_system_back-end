// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
  },
  yaxis: {
    title: {
      text: 'Count',
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Purchase Orders',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();



window.addEventListener('DOMContentLoaded', function() {
      // Selecione todos os itens da lista de colaboradores
      const items = document.querySelectorAll('.colaboradores-list li');
      let maxWidth = 0;

      // Itere sobre os itens para encontrar a largura máxima
      items.forEach(function(item) {
          const width = item.getBoundingClientRect().width;
          if (width > maxWidth) {
              maxWidth = width;
          }
      });

      // Ajuste a largura do contêiner para ser igual à largura máxima dos itens
      const container = document.querySelector('.colaboradores-container');
      container.style.width = maxWidth + 'px';
});

window.addEventListener('DOMContentLoaded', function() {
  // Selecione todos os spans dentro de li
  const spans = document.querySelectorAll('.colaboradores-list li span');
  let maxWidth = 0;

  // Itere sobre os spans para encontrar a maior largura
  spans.forEach(function(span) {
      const width = span.getBoundingClientRect().width;
      if (width > maxWidth) {
          maxWidth = width;
      }
  });

  // Defina a largura mínima para cada span
  spans.forEach(function(span) {
      span.style.minWidth = (maxWidth + 3) + 'px'; // Adiciona 3 pixels extras
  });
});


// Lista de colaboradores
const colaboradores = [
  { nome: "John Doe", cpf: "123.456.789-00", setor: "Vendas", chave_pix: "123456789", salario: "R$ 5000", vale_transporte: "R$ 200" },
  { nome: "Jane Smith", cpf: "987.654.321-00", setor: "Operacional", chave_pix: "987654321", salario: "R$ 6000", vale_transporte: "R$ 250" },
  { nome: "Michael Johnson", cpf: "456.789.123-00", setor: "RH", chave_pix: "456789123", salario: "R$ 5500", vale_transporte: "R$ 180" },
  { nome: "Emily Brown", cpf: "654.321.987-00", setor: "TI", chave_pix: "654321987", salario: "R$ 4800", vale_transporte: "R$ 220" },
  { nome: "David Garcia", cpf: "789.123.456-00", setor: "Atendimento/Loja", chave_pix: "789123456", salario: "R$ 5200", vale_transporte: "R$ 190" },
  { nome: "Ana Silva", cpf: "321.987.654-00", setor: "Vendas", chave_pix: "321987654", salario: "R$ 5800", vale_transporte: "R$ 210" }
];

// Seleciona o elemento ul onde os colaboradores serão listados
const listaColaboradores = document.getElementById('lista-colaboradores');
// Seleciona os elementos HTML relevantes
const selectColaborador = document.getElementById('colaborador');
const inputCPF = document.getElementById('cpf');
const inputChavePix = document.getElementById('chave-pix');

// Verifica a origem da solicitação
const url = window.location.href;
let respostaHTML = '';

if (url.includes('financeiro.html')) {
  // Se a origem for financeiro.html
  colaboradores.forEach(function(colaborador) {
      respostaHTML += `
          <li>
              <span>${colaborador.nome}</span> 
              <span>${colaborador.chave_pix}</span> 
              <span>${colaborador.salario}</span> 
              <span>${colaborador.vale_transporte}</span> 
          </li>
      `;
  });
} else if (url.includes('register_colab.html')) {
  // Se a origem for register_colab.html
  colaboradores.forEach(function(colaborador) {
      respostaHTML += `
          <li>
              <span>${colaborador.nome}</span> 
              <span>${colaborador.cpf}</span> 
              <span>${colaborador.chave_pix}</span> 
              <span>${colaborador.setor}</span> 
          </li>
      `;
  });
}


// Evento de mudança no select para preencher os campos CPF e Chave PIX
selectColaborador.addEventListener('change', function() {
  // Obtenha o colaborador selecionado
  const selecionado = this.value;
  // Encontre o colaborador na lista de colaboradores
  const colaborador = colaboradores.find(c => c.nome === selecionado);
  // Preencha os campos CPF e Chave PIX com os dados do colaborador
  if (colaborador) {
      inputCPF.value = colaborador.cpf;
      inputChavePix.value = colaborador.chave_pix;
  } else {
      // Limpe os campos se nenhum colaborador for selecionado
      inputCPF.value = '';
      inputChavePix.value = '';
  }
});

// Preenche o select com as opções de colaboradores
colaboradores.forEach(function(colaborador) {
  const option = document.createElement('option');
  option.value = colaborador.nome; // Define o valor da opção como o nome do colaborador
  option.textContent = colaborador.nome; // Define o texto da opção como o nome do colaborador
  selectColaborador.appendChild(option); // Adiciona a opção ao select
    
});

// Seleciona o elemento do tipo de pagamento
const selectTipoPagamento = document.getElementById('tipo-pagamento');
// Seleciona o elemento do campo de valor
const inputValor = document.getElementById('valor');

// Evento de mudança no select do tipo de pagamento para preencher o campo de valor
selectTipoPagamento.addEventListener('change', function() {
  // Obtenha o tipo de pagamento selecionado
  const tipoPagamento = this.value;
  // Obtenha o colaborador selecionado
  const selecionado = selectColaborador.value;
  // Encontre o colaborador na lista de colaboradores
  const colaborador = colaboradores.find(c => c.nome === selecionado);
  
  // Preencha o campo de valor com base no tipo de pagamento selecionado
  if (colaborador) {
    if (tipoPagamento === 'salario') {
      inputValor.value = colaborador.salario;
    } else if (tipoPagamento === 'vale-transporte') {
      inputValor.value = colaborador.vale_transporte;
    } else {
      inputValor.value = ''; // Limpa o campo se nenhum tipo de pagamento for selecionado
    }
  }
});

// Evento de mudança no select do tipo de pagamento para preencher o campo de valor
selectTipoPagamento.addEventListener('change', function() {
  // Obtenha o tipo de pagamento selecionado
  const tipoPagamento = this.value;
  // Obtenha o colaborador selecionado
  const selecionado = selectColaborador.value;
  // Encontre o colaborador na lista de colaboradores
  const colaborador = colaboradores.find(c => c.nome === selecionado);
  
  // Preencha o campo de valor com base no tipo de pagamento selecionado
  if (colaborador) {
    if (tipoPagamento === 'salario') {
      inputValor.value = colaborador.salario;
    } else if (tipoPagamento === 'vale-transporte') {
      inputValor.value = colaborador.vale_transporte;
    } else {
      inputValor.value = ''; // Limpa o campo se nenhum tipo de pagamento for selecionado
    }
  }
  
  // Se o tipo de pagamento for o valor padrão, limpe o campo de valor
  if (tipoPagamento === '') {
    inputValor.value = '';
  }
});

// Atualiza a lista de colaboradores com a resposta correspondente
listaColaboradores.innerHTML = respostaHTML;