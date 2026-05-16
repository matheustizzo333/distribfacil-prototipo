import { useState } from "react";

const CATEGORIAS = [
  { id:"CAT01", nome:"Bebidas",          icon:"🥤" },
  { id:"CAT02", nome:"Laticinios",       icon:"🥛" },
  { id:"CAT03", nome:"Graos e Cereais",  icon:"🌾" },
  { id:"CAT04", nome:"Higiene Pessoal",  icon:"🧴" },
  { id:"CAT05", nome:"Limpeza",          icon:"🧹" },
  { id:"CAT06", nome:"Massas e Molhos",  icon:"🍝" },
  { id:"CAT07", nome:"Oleos e Gorduras", icon:"🫙" },
  { id:"CAT08", nome:"Conservas",        icon:"🥫" },
];

const PRODUTOS = [
  { cod:"10023451", ean:"7894900011518", nome:"COCA COLA 2L PET",                 cat:"CAT01", local:"B-02-003", lote:"22", val:"06/12/25", un:"UN", qtdCx:6,  estCx:18, estUn:4,  pcCusto:4.20,  pcVenda:6.90,  margem:64.3, minEstq:36  },
  { cod:"80001234", ean:"7891991010856", nome:"GUARANA ANTARCTICA 2L",             cat:"CAT01", local:"B-01-004", lote:"41", val:"02/10/25", un:"UN", qtdCx:6,  estCx:12, estUn:3,  pcCusto:3.80,  pcVenda:6.50,  margem:71.1, minEstq:24  },
  { cod:"10034562", ean:"7894900700015", nome:"COCA COLA LATA 350ML C/12",         cat:"CAT01", local:"B-02-005", lote:"18", val:"10/08/25", un:"UN", qtdCx:12, estCx:30, estUn:0,  pcCusto:2.10,  pcVenda:3.50,  margem:66.7, minEstq:60  },
  { cod:"10045673", ean:"7896050700053", nome:"AGUA MINERAL 500ML C/12",           cat:"CAT01", local:"B-03-001", lote:"55", val:"10/05/26", un:"UN", qtdCx:12, estCx:40, estUn:6,  pcCusto:0.65,  pcVenda:1.20,  margem:84.6, minEstq:120 },
  { cod:"10056784", ean:"7896020305014", nome:"SUCO DEL VALLE UVA 1L",             cat:"CAT01", local:"B-04-002", lote:"09", val:"15/03/26", un:"UN", qtdCx:12, estCx:8,  estUn:5,  pcCusto:4.50,  pcVenda:7.90,  margem:75.6, minEstq:24  },
  { cod:"10067895", ean:"7896065200038", nome:"CERVEJA BRAHMA LATA 350ML C/12",    cat:"CAT01", local:"B-05-001", lote:"62", val:"20/09/25", un:"UN", qtdCx:12, estCx:25, estUn:8,  pcCusto:2.80,  pcVenda:4.50,  margem:60.7, minEstq:60  },
  { cod:"30056789", ean:"7896085801022", nome:"LEITE INTEGRAL ITALAC 1L CX",       cat:"CAT02", local:"A-04-005", lote:"08", val:"15/11/25", un:"UN", qtdCx:12, estCx:22, estUn:8,  pcCusto:3.40,  pcVenda:5.20,  margem:52.9, minEstq:48  },
  { cod:"11023456", ean:"7896045105068", nome:"CREME DE LEITE NESTLE 200G C/24",   cat:"CAT02", local:"A-02-006", lote:"38", val:"11/04/26", un:"UN", qtdCx:24, estCx:7,  estUn:12, pcCusto:2.20,  pcVenda:3.80,  margem:72.7, minEstq:48  },
  { cod:"30067890", ean:"7896058500036", nome:"QUEIJO MUSSARELA FATIADO 150G",     cat:"CAT02", local:"A-03-001", lote:"14", val:"28/06/25", un:"UN", qtdCx:10, estCx:5,  estUn:7,  pcCusto:6.80,  pcVenda:10.90, margem:60.3, minEstq:30  },
  { cod:"30078901", ean:"7898080640482", nome:"IOGURTE NESTLE MORANGO 170G C/12",  cat:"CAT02", local:"A-05-003", lote:"25", val:"05/07/25", un:"UN", qtdCx:12, estCx:9,  estUn:4,  pcCusto:1.90,  pcVenda:3.20,  margem:68.4, minEstq:36  },
  { cod:"50078901", ean:"7896006600897", nome:"ARROZ BRANCO TIPO 1 5KG",           cat:"CAT03", local:"E-02-007", lote:"12", val:"10/01/27", un:"SC", qtdCx:1,  estCx:95, estUn:0,  pcCusto:14.50, pcVenda:22.90, margem:57.9, minEstq:30  },
  { cod:"60089012", ean:"7896005800245", nome:"FEIJAO CARIOCA 1KG",                cat:"CAT03", local:"E-02-008", lote:"11", val:"08/03/27", un:"PC", qtdCx:10, estCx:18, estUn:5,  pcCusto:5.80,  pcVenda:9.50,  margem:63.8, minEstq:50  },
  { cod:"50089012", ean:"7896006200118", nome:"ARROZ PARBOILIZADO 5KG",            cat:"CAT03", local:"E-03-001", lote:"16", val:"22/02/27", un:"SC", qtdCx:1,  estCx:42, estUn:0,  pcCusto:13.80, pcVenda:21.50, margem:55.8, minEstq:20  },
  { cod:"60100123", ean:"7896085200321", nome:"LENTILHA 500G",                     cat:"CAT03", local:"E-04-002", lote:"07", val:"30/06/27", un:"PC", qtdCx:12, estCx:6,  estUn:3,  pcCusto:3.90,  pcVenda:6.50,  margem:66.7, minEstq:24  },
  { cod:"68635410", ean:"7891150037397", nome:"SEDA SHAMPOO CERAMIDAS 325ML C/12", cat:"CAT04", local:"A-01-001", lote:"40", val:"11/03/29", un:"UN", qtdCx:12, estCx:6,  estUn:0,  pcCusto:8.90,  pcVenda:14.90, margem:67.4, minEstq:24  },
  { cod:"68646521", ean:"7891150008275", nome:"PANTENE CONDICIONADOR 400ML",       cat:"CAT04", local:"A-01-003", lote:"33", val:"20/01/29", un:"UN", qtdCx:12, estCx:4,  estUn:6,  pcCusto:9.20,  pcVenda:15.50, margem:68.5, minEstq:24  },
  { cod:"68657632", ean:"7891024131420", nome:"SABONETE DOVE ORIGINAL 90G C/12",   cat:"CAT04", local:"A-01-005", lote:"19", val:"05/08/28", un:"UN", qtdCx:12, estCx:10, estUn:4,  pcCusto:2.80,  pcVenda:4.90,  margem:75.0, minEstq:36  },
  { cod:"68668743", ean:"7509546054666", nome:"DESODORANTE REXONA 150ML",          cat:"CAT04", local:"A-02-002", lote:"28", val:"12/11/27", un:"UN", qtdCx:6,  estCx:8,  estUn:2,  pcCusto:7.50,  pcVenda:12.90, margem:72.0, minEstq:18  },
  { cod:"90012345", ean:"7891024130416", nome:"SABAO EM PO OMO 1KG",              cat:"CAT05", local:"F-01-003", lote:"17", val:"30/06/27", un:"UN", qtdCx:12, estCx:7,  estUn:8,  pcCusto:9.80,  pcVenda:16.90, margem:72.4, minEstq:24  },
  { cod:"90023456", ean:"7891035600073", nome:"DETERGENTE LIMPOL 500ML C/24",      cat:"CAT05", local:"F-02-001", lote:"44", val:"10/09/27", un:"UN", qtdCx:24, estCx:12, estUn:6,  pcCusto:1.40,  pcVenda:2.50,  margem:78.6, minEstq:48  },
  { cod:"90034567", ean:"7896013100025", nome:"AGUA SANITARIA QBOA 1L C/12",       cat:"CAT05", local:"F-03-002", lote:"38", val:"15/04/26", un:"UN", qtdCx:12, estCx:9,  estUn:3,  pcCusto:2.60,  pcVenda:4.20,  margem:61.5, minEstq:36  },
  { cod:"90045678", ean:"7891035701030", nome:"AMACIANTE DOWNY 1L",                cat:"CAT05", local:"F-04-001", lote:"21", val:"22/07/27", un:"UN", qtdCx:12, estCx:6,  estUn:0,  pcCusto:5.90,  pcVenda:9.80,  margem:66.1, minEstq:24  },
  { cod:"12034567", ean:"7896020500077", nome:"MACARRAO ESPAGUETE RENATA 500G",    cat:"CAT06", local:"C-04-002", lote:"20", val:"18/07/27", un:"UN", qtdCx:24, estCx:12, estUn:10, pcCusto:2.80,  pcVenda:4.50,  margem:60.7, minEstq:48  },
  { cod:"12045678", ean:"7896020200115", nome:"MACARRAO PARAFUSO RENATA 500G",     cat:"CAT06", local:"C-04-004", lote:"21", val:"25/07/27", un:"UN", qtdCx:24, estCx:8,  estUn:14, pcCusto:2.80,  pcVenda:4.50,  margem:60.7, minEstq:48  },
  { cod:"12056789", ean:"7896036095506", nome:"MOLHO DE TOMATE POMODORO 340G",     cat:"CAT06", local:"C-05-001", lote:"13", val:"30/11/26", un:"UN", qtdCx:24, estCx:15, estUn:8,  pcCusto:1.90,  pcVenda:3.20,  margem:68.4, minEstq:48  },
  { cod:"70090123", ean:"7896036095408", nome:"OLEO SOJA SOYA 900ML C/12",         cat:"CAT07", local:"D-03-001", lote:"29", val:"14/09/26", un:"UN", qtdCx:12, estCx:6,  estUn:4,  pcCusto:5.20,  pcVenda:8.90,  margem:71.2, minEstq:24  },
  { cod:"40067890", ean:"5601292000052", nome:"AZEITE EXTRA VIRGEM GALLO 500ML",   cat:"CAT07", local:"D-01-002", lote:"33", val:"20/05/27", un:"UN", qtdCx:6,  estCx:7,  estUn:3,  pcCusto:22.00, pcVenda:36.90, margem:67.7, minEstq:12  },
  { cod:"70101234", ean:"7896036000017", nome:"MARGARINA QUALY 500G C/12",         cat:"CAT07", local:"D-02-003", lote:"47", val:"08/12/25", un:"UN", qtdCx:12, estCx:8,  estUn:6,  pcCusto:4.10,  pcVenda:6.90,  margem:68.3, minEstq:24  },
  { cod:"20045678", ean:"7622210651492", nome:"BISCOITO MAIZENA PIRAQUE 400G",     cat:"CAT08", local:"C-03-010", lote:"15", val:"03/08/26", un:"UN", qtdCx:24, estCx:5,  estUn:14, pcCusto:3.60,  pcVenda:5.90,  margem:63.9, minEstq:48  },
  { cod:"20056789", ean:"7894321722016", nome:"SARDINHA COQUEIRO OLEO 125G C/48",  cat:"CAT08", local:"C-02-005", lote:"06", val:"15/06/27", un:"UN", qtdCx:48, estCx:3,  estUn:12, pcCusto:3.10,  pcVenda:5.20,  margem:67.7, minEstq:48  },
  { cod:"20067890", ean:"7896051110015", nome:"MILHO VERDE BONDUELLE 200G C/24",   cat:"CAT08", local:"C-01-003", lote:"31", val:"20/10/27", un:"UN", qtdCx:24, estCx:7,  estUn:6,  pcCusto:2.40,  pcVenda:4.10,  margem:70.8, minEstq:48  },
];

const CLIENTES = [
  { id:"CLI01", nome:"Mercado Sao Joao",    cnpj:"12.345.678/0001-90", end:"Rua XV de Novembro, 340", fone:"(18) 3301-1234", limite:15000, saldo:3200  },
  { id:"CLI02", nome:"Mini Box Central",    cnpj:"23.456.789/0001-01", end:"Av. Brasil, 1200",         fone:"(18) 3302-5678", limite:8000,  saldo:1100  },
  { id:"CLI03", nome:"Atacarejo Boa Vida",  cnpj:"34.567.890/0001-12", end:"Rua Campos Salles, 85",    fone:"(18) 3303-9012", limite:50000, saldo:9670  },
  { id:"CLI04", nome:"Padaria Pao de Mel",  cnpj:"45.678.901/0001-23", end:"Rua da Paz, 22",           fone:"(18) 3304-3456", limite:5000,  saldo:890   },
  { id:"CLI05", nome:"Emporio da Familia",  cnpj:"56.789.012/0001-34", end:"Av. Paulista, 890",        fone:"(18) 3305-7890", limite:12000, saldo:2340  },
  { id:"CLI06", nome:"Supermercado Modelo", cnpj:"67.890.123/0001-45", end:"Rua das Flores, 501",      fone:"(18) 3306-2345", limite:30000, saldo:0     },
  { id:"CLI07", nome:"Mercearia do Bairro", cnpj:"78.901.234/0001-56", end:"Rua 7 de Setembro, 77",    fone:"(18) 3307-6789", limite:4000,  saldo:650   },
  { id:"CLI08", nome:"Distribuidora Norte", cnpj:"89.012.345/0001-67", end:"Av. Norte Sul, 1500",      fone:"(18) 3308-0123", limite:80000, saldo:14200 },
];

const PEDIDOS_INICIAIS = [
  { id:"PED-8821", clienteId:"CLI01", data:"06/05/25", status:"separando",   vendedor:"Marcos", total:4820.50, itens:[{cod:"10023451",nome:"COCA COLA 2L PET",qtd:6,pcUnit:6.90},{cod:"30056789",nome:"LEITE INTEGRAL ITALAC 1L CX",qtd:12,pcUnit:5.20},{cod:"60089012",nome:"FEIJAO CARIOCA 1KG",qtd:10,pcUnit:9.50}] },
  { id:"PED-8820", clienteId:"CLI02", data:"06/05/25", status:"conferencia", vendedor:"Luana",  total:1290.00, itens:[{cod:"20045678",nome:"BISCOITO MAIZENA PIRAQUE 400G",qtd:24,pcUnit:5.90},{cod:"90012345",nome:"SABAO EM PO OMO 1KG",qtd:6,pcUnit:16.90}] },
  { id:"PED-8819", clienteId:"CLI03", data:"05/05/25", status:"em_rota",     vendedor:"Marcos", total:9670.80, itens:[{cod:"50078901",nome:"ARROZ BRANCO TIPO 1 5KG",qtd:20,pcUnit:22.90},{cod:"60089012",nome:"FEIJAO CARIOCA 1KG",qtd:30,pcUnit:9.50},{cod:"40067890",nome:"AZEITE EXTRA VIRGEM GALLO 500ML",qtd:6,pcUnit:36.90}] },
  { id:"PED-8818", clienteId:"CLI04", data:"05/05/25", status:"entregue",    vendedor:"Luana",  total:890.30,  itens:[{cod:"20045678",nome:"BISCOITO MAIZENA PIRAQUE 400G",qtd:12,pcUnit:5.90},{cod:"12056789",nome:"MOLHO DE TOMATE POMODORO 340G",qtd:24,pcUnit:3.20}] },
  { id:"PED-8817", clienteId:"CLI05", data:"04/05/25", status:"entregue",    vendedor:"Tiago",  total:2340.00, itens:[{cod:"70090123",nome:"OLEO SOJA SOYA 900ML C/12",qtd:12,pcUnit:8.90},{cod:"40067890",nome:"AZEITE EXTRA VIRGEM GALLO 500ML",qtd:6,pcUnit:36.90}] },
  { id:"PED-8816", clienteId:"CLI06", data:"04/05/25", status:"cancelado",   vendedor:"Marcos", total:7120.90, itens:[{cod:"50078901",nome:"ARROZ BRANCO TIPO 1 5KG",qtd:50,pcUnit:22.90},{cod:"60089012",nome:"FEIJAO CARIOCA 1KG",qtd:50,pcUnit:9.50}] },
];

const NOTAS_DB = [
  { nf:"NF-004521", clienteId:"CLI01", valor:4820.50, emissao:"06/05/25", venc:"20/05/25", status:"aberta"  },
  { nf:"NF-004520", clienteId:"CLI03", valor:9670.80, emissao:"05/05/25", venc:"19/05/25", status:"aberta"  },
  { nf:"NF-004519", clienteId:"CLI05", valor:2340.00, emissao:"04/05/25", venc:"18/05/25", status:"paga"    },
  { nf:"NF-004518", clienteId:"CLI04", valor:890.30,  emissao:"03/05/25", venc:"17/05/25", status:"paga"    },
  { nf:"NF-004515", clienteId:"CLI02", valor:1100.00, emissao:"28/04/25", venc:"12/05/25", status:"vencida" },
];

const ROTEIROS_DB = [
  { id:"225151", nome:"PRES PRUDENTE - ZONA SUL", clientes:4, itens:48, peso:103.4, vol:0.16, status:"em_andamento", motorista:"Pedro Lima",   saida:"08:30", prev:"15:00" },
  { id:"225152", nome:"MARILIA - CENTRO",          clientes:3, itens:31, peso:72.1,  vol:0.09, status:"aguardando",  motorista:"Adriano Costa", saida:"10:00", prev:"16:30" },
  { id:"225153", nome:"ASSIS - BAIRROS",           clientes:5, itens:62, peso:145.8, vol:0.21, status:"concluido",   motorista:"Fernando Reis", saida:"07:00", prev:"14:00" },
];

const ENTREGAS_DB = [
  { idx:1, clienteId:"CLI01", vol:12, peso:28.4, status:"entregue",    hora:"09:15" },
  { idx:2, clienteId:"CLI02", vol:7,  peso:14.2, status:"em_andamento",hora:"10:40" },
  { idx:3, clienteId:"CLI03", vol:23, peso:41.0, status:"aguardando",  hora:"--"    },
  { idx:4, clienteId:"CLI04", vol:5,  peso:8.1,  status:"aguardando",  hora:"--"    },
];

const USERS = [
  { id:"U1", nome:"Matheus Tizzo", login:"Tizzo", senha:"1234", role:"Comercial",  avatar:"CM" },
  { id:"U2", nome:"Ana Souza",     login:"ana",    senha:"1234", role:"Separador",  avatar:"MT" },
  { id:"U3", nome:"Pedro Lima",    login:"pedro",  senha:"1234", role:"Motorista",  avatar:"PL" },
  { id:"U4", nome:"Joao Silva",    login:"joao",   senha:"1234", role:"Conferente", avatar:"JS" },
];

const estTotal  = p => p.estCx * p.qtdCx + p.estUn;
const baixo     = p => estTotal(p) < p.minEstq;
const fmtR      = v => "R$ " + Number(v).toLocaleString("pt-BR", { minimumFractionDigits:2 });
const fmtMarg   = v => v.toFixed(1) + "%";
const nomeCli   = (id, lista) => (lista || CLIENTES).find(c => c.id === id)?.nome || id;
const iconCat   = id => CATEGORIAS.find(c => c.id === id)?.icon || "📦";
const pct       = (a, b) => b === 0 ? 0 : Math.round((a / b) * 100);
const hoje      = () => { const d = new Date(); return `${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}/${String(d.getFullYear()).slice(2)}`; };
const novoPedId = (lista) => { const nums = lista.map(p => parseInt(p.id.replace("PED-",""))); return "PED-" + (Math.max(...nums) + 1); };

const T = {
  bg:"#F4F6FA", white:"#FFFFFF", border:"#E5E9F0", borderDark:"#D1D8E4",
  text:"#0F1623", textSub:"#4B5563", textMuted:"#9CA3AF",
  sidebar:"#0F1623", sidebarHover:"#1C2537", sidebarActive:"#2563EB",
  accent:"#2563EB", accentLight:"#EEF3FF",
  green:"#10B981", greenLight:"#ECFDF5",
  amber:"#F59E0B", amberLight:"#FFFBEB",
  red:"#EF4444",   redLight:"#FEF2F2",
  purple:"#8B5CF6",purpleLight:"#F5F3FF",
  cyan:"#06B6D4",
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
body{background:${T.bg};color:${T.text};font-family:'Barlow',sans-serif;min-height:100vh;-webkit-font-smoothing:antialiased;}
button,input,select,textarea{font-family:'Barlow',sans-serif;}
::-webkit-scrollbar{width:5px;height:5px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:${T.borderDark};border-radius:10px;}
.mono{font-family:'IBM Plex Mono',monospace;}
.condensed{font-family:'Barlow Condensed',sans-serif;}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@keyframes scaleIn{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}
@keyframes scanPulse{0%,100%{opacity:.6}50%{opacity:1}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes confetti{0%{transform:translateY(0) rotate(0);opacity:1}100%{transform:translateY(-120px) rotate(720deg);opacity:0}}
.fade-up{animation:fadeUp .35s cubic-bezier(.22,1,.36,1) both;}
.fade-up-1{animation:fadeUp .35s .05s cubic-bezier(.22,1,.36,1) both;}
.fade-up-2{animation:fadeUp .35s .1s cubic-bezier(.22,1,.36,1) both;}
.fade-up-3{animation:fadeUp .35s .15s cubic-bezier(.22,1,.36,1) both;}
.fade-up-4{animation:fadeUp .35s .2s cubic-bezier(.22,1,.36,1) both;}
.scale-in{animation:scaleIn .3s cubic-bezier(.22,1,.36,1) both;}
.spin{animation:spin .8s linear infinite;}
.btn-primary{background:${T.accent};color:#fff;border:none;border-radius:10px;padding:0 24px;height:46px;font-size:14px;font-weight:700;cursor:pointer;transition:all .15s;display:flex;align-items:center;justify-content:center;gap:8px;}
.btn-primary:hover{background:#1D4ED8;transform:translateY(-1px);}
.btn-primary:disabled{opacity:.5;cursor:not-allowed;transform:none;}
.btn-ghost{background:transparent;color:${T.textSub};border:1.5px solid ${T.border};border-radius:10px;padding:0 20px;height:40px;font-size:13px;font-weight:600;cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:8px;}
.btn-ghost:hover{border-color:${T.accent};color:${T.accent};background:${T.accentLight};}
.btn-danger{background:${T.redLight};color:${T.red};border:1.5px solid ${T.red}44;border-radius:8px;padding:0 14px;height:34px;font-size:12px;font-weight:700;cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:6px;}
.btn-danger:hover{background:${T.red};color:#fff;}
.card{background:${T.white};border:1.5px solid ${T.border};border-radius:16px;padding:20px;transition:box-shadow .2s,transform .15s;}
.card:hover{box-shadow:0 4px 20px rgba(0,0,0,.06);}
.card-clickable{cursor:pointer;}
.card-clickable:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.08);}
.input-field{width:100%;background:${T.bg};border:1.5px solid ${T.border};border-radius:10px;padding:0 14px;height:46px;font-size:14px;color:${T.text};outline:none;transition:border-color .15s;}
.input-field:focus{border-color:${T.accent};background:${T.white};}
.input-field::placeholder{color:${T.textMuted};}
.tab-bar{display:flex;gap:4px;background:${T.bg};border-radius:10px;padding:4px;}
.tab{flex:1;padding:8px;border:none;border-radius:7px;cursor:pointer;font-size:13px;font-weight:600;transition:all .15s;background:transparent;color:${T.textSub};font-family:'Barlow',sans-serif;}
.tab.active{background:${T.white};color:${T.accent};box-shadow:0 1px 6px rgba(0,0,0,.08);}
.status-dot{width:8px;height:8px;border-radius:50%;display:inline-block;}
.scan-line{height:2px;background:linear-gradient(90deg,transparent,${T.accent},transparent);animation:scanPulse 2s ease-in-out infinite;border-radius:2px;}
.sidebar-link{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:10px;cursor:pointer;transition:all .15s;border:none;background:transparent;color:rgba(255,255,255,.55);font-size:13.5px;font-weight:500;width:100%;font-family:'Barlow',sans-serif;text-align:left;}
.sidebar-link:hover{background:${T.sidebarHover};color:rgba(255,255,255,.85);}
.sidebar-link.active{background:${T.sidebarActive};color:#fff;font-weight:700;}
.kpi-card{background:${T.white};border:1.5px solid ${T.border};border-radius:16px;padding:22px 20px;}
.table-row{display:grid;padding:12px 16px;border-radius:10px;transition:background .12s;cursor:pointer;}
.table-row:hover{background:${T.bg};}
.progress-track{background:${T.bg};border-radius:99px;height:8px;overflow:hidden;}
.progress-fill{height:100%;border-radius:99px;transition:width .6s cubic-bezier(.22,1,.36,1);}
.badge{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:.4px;font-family:'Barlow',sans-serif;}
.login-bg{background:linear-gradient(135deg,#0F1623 0%,#1A2540 50%,#0F1623 100%);min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
.login-grid{position:absolute;inset:0;background-image:linear-gradient(${T.accent}12 1px,transparent 1px),linear-gradient(90deg,${T.accent}12 1px,transparent 1px);background-size:48px 48px;}
.prod-option{padding:12px 16px;cursor:pointer;border-bottom:1px solid ${T.border};transition:background .12s;display:flex;justify-content:space-between;align-items:center;}
.prod-option:hover{background:${T.accentLight};}
.prod-option:last-child{border-bottom:none;}
@media(max-width:768px){.hide-mobile{display:none !important;}.sidebar-desktop{display:none !important;}.bottom-nav{display:flex !important;}}
@media(min-width:769px){.bottom-nav{display:none !important;}}
`;

const SC = { em_andamento:T.amber,em_rota:T.cyan,aguardando:T.accent,concluido:T.green,separando:T.purple,conferencia:T.cyan,entregue:T.green,cancelado:T.red,aberta:T.amber,paga:T.green,vencida:T.red };
const SL = { em_andamento:"Em Andamento",em_rota:"Em Rota",aguardando:"Aguardando",concluido:"Concluido",separando:"Separando",conferencia:"Conferencia",entregue:"Entregue",cancelado:"Cancelado",aberta:"Em Aberto",paga:"Paga",vencida:"Vencida" };
const sc = s => SC[s] || T.textMuted;
const sl = s => SL[s] || s;

const Badge = ({ status, children }) => {
  const c = sc(status);
  return <span className="badge" style={{ background:c+"18", color:c }}><span className="status-dot" style={{ background:c }} />{children || sl(status)}</span>;
};

const KPI = ({ label, value, sub, color=T.accent, icon }) => (
  <div className="kpi-card fade-up">
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
      <div style={{ fontSize:12, color:T.textMuted, fontWeight:600, textTransform:"uppercase", letterSpacing:.5 }}>{label}</div>
      {icon && <div style={{ width:36, height:36, borderRadius:10, background:color+"15", display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }}>{icon}</div>}
    </div>
    <div className="condensed" style={{ fontSize:32, fontWeight:800, color, lineHeight:1 }}>{value}</div>
    {sub && <div style={{ fontSize:12, color:T.textMuted, marginTop:6 }}>{sub}</div>}
  </div>
);

const Progress = ({ value, max, color=T.accent, label }) => {
  const p = pct(value, max);
  return (
    <div>
      {label && <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, color:T.textSub, marginBottom:6 }}><span>{label}</span><span style={{ color, fontWeight:700 }}>{p}%</span></div>}
      <div className="progress-track"><div className="progress-fill" style={{ width:`${p}%`, background:color }} /></div>
    </div>
  );
};

const NAV_MAP = {
  comercial:  [{id:"dashboard",label:"Dashboard",icon:"📊"},{id:"novo_pedido",label:"Novo Pedido",icon:"🛒"},{id:"pedidos",label:"Pedidos",icon:"📋"},{id:"faturamento",label:"Faturamento",icon:"💰"},{id:"clientes",label:"Clientes",icon:"🏪"},{id:"roteiros",label:"Roteiros",icon:"🗺"},{id:"produtos",label:"Produtos",icon:"🗃"}],
  separador:  [{id:"atividade",label:"Atividade",icon:"⚡"},{id:"separacao",label:"Separacao",icon:"📦"},{id:"bipagem",label:"Consulta",icon:"🔍"},{id:"historico",label:"Historico",icon:"🕒"},{id:"produtos",label:"Produtos",icon:"🗃"}],
  conferente: [{id:"conferencia",label:"Conferencia",icon:"✅"},{id:"bipagem",label:"Consulta",icon:"🔍"},{id:"historico",label:"Historico",icon:"🕒"},{id:"produtos",label:"Produtos",icon:"🗃"}],
  motorista:  [{id:"entregas",label:"Entregas",icon:"📍"},{id:"roteiro",label:"Roteiro",icon:"🗺"},{id:"historico",label:"Historico",icon:"🕒"}],
};

// ============================================================
//  LOGIN
// ============================================================
const Login = ({ onLogin }) => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const handleLogin = () => {
    if (!login || !senha) { setErr("Preencha todos os campos."); return; }
    setLoading(true); setErr("");
    setTimeout(() => {
      const u = USERS.find(u => u.login === login && u.senha === senha);
      if (u) onLogin(u); else { setErr("Usuario ou senha incorretos."); setLoading(false); }
    }, 900);
  };
  return (
    <div className="login-bg">
      <div className="login-grid" />
      <div style={{ position:"absolute", width:400, height:400, background:`radial-gradient(circle,${T.accent}20 0%,transparent 70%)`, top:-100, right:-100, pointerEvents:"none" }} />
      <div style={{ position:"relative", zIndex:1, width:"100%", maxWidth:420, padding:"0 20px" }}>
        <div className="fade-up" style={{ textAlign:"center", marginBottom:40 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:10, marginBottom:10 }}>
            <div style={{ width:44, height:44, background:`linear-gradient(135deg,${T.accent},#60A5FA)`, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:22 }}>📦</span>
            </div>
            <div>
              <div className="condensed" style={{ fontSize:26, fontWeight:800, color:"#fff", lineHeight:1, letterSpacing:-.5 }}>DistribFacil</div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,.4)", letterSpacing:2, textTransform:"uppercase" }}>Distribuidora</div>
            </div>
          </div>
        </div>
        <div className="fade-up-1 scale-in" style={{ background:"rgba(255,255,255,.06)", backdropFilter:"blur(20px)", border:"1.5px solid rgba(255,255,255,.1)", borderRadius:20, padding:32 }}>
          <div style={{ fontSize:20, fontWeight:700, color:"#fff", marginBottom:6 }}>Bem-vindo de volta</div>
          <div style={{ fontSize:13, color:"rgba(255,255,255,.4)", marginBottom:28 }}>Acesse com suas credenciais</div>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            <div>
              <label style={{ fontSize:12, fontWeight:600, color:"rgba(255,255,255,.5)", display:"block", marginBottom:6 }}>USUARIO</label>
              <input className="input-field" value={login} onChange={e=>setLogin(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleLogin()} placeholder="Digite seu login" style={{ background:"rgba(255,255,255,.08)", border:"1.5px solid rgba(255,255,255,.12)", color:"#fff" }} />
            </div>
            <div>
              <label style={{ fontSize:12, fontWeight:600, color:"rgba(255,255,255,.5)", display:"block", marginBottom:6 }}>SENHA</label>
              <div style={{ position:"relative" }}>
                <input className="input-field" type={showPass?"text":"password"} value={senha} onChange={e=>setSenha(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleLogin()} placeholder="..." style={{ background:"rgba(255,255,255,.08)", border:"1.5px solid rgba(255,255,255,.12)", color:"#fff", paddingRight:48 }} />
                <button onClick={()=>setShowPass(!showPass)} style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", color:"rgba(255,255,255,.4)", cursor:"pointer", fontSize:16 }}>{showPass?"X":"O"}</button>
              </div>
            </div>
            {err && <div style={{ background:"#EF444420", border:"1px solid #EF444440", borderRadius:8, padding:"10px 14px", fontSize:13, color:"#FCA5A5" }}>{err}</div>}
            <button className="btn-primary" onClick={handleLogin} disabled={loading} style={{ height:50, fontSize:15, marginTop:4, opacity:loading?0.85:1 }}>
              {loading ? <span className="spin" style={{ display:"inline-block", width:18, height:18, border:"2.5px solid #fff4", borderTopColor:"#fff", borderRadius:"50%" }} /> : "Entrar no Sistema"}
            </button>
          </div>
        </div>
        <div className="fade-up-2" style={{ marginTop:24 }}>
          <div style={{ fontSize:11, color:"rgba(255,255,255,.3)", textAlign:"center", marginBottom:12, letterSpacing:1 }}>ACESSO RAPIDO - DEMO</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
            {USERS.map(u => (
              <button key={u.id} onClick={()=>{setLogin(u.login);setSenha(u.senha);}} style={{ background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.08)", borderRadius:10, padding:"10px 12px", color:"rgba(255,255,255,.6)", cursor:"pointer", textAlign:"left", fontFamily:"'Barlow',sans-serif" }}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,.1)";e.currentTarget.style.color="#fff";}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,.05)";e.currentTarget.style.color="rgba(255,255,255,.6)";}}>
                <div style={{ fontSize:12, fontWeight:700 }}>{u.nome}</div>
                <div style={{ fontSize:11, opacity:.6, marginTop:2, textTransform:"capitalize" }}>{u.role}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
//  NOVO PEDIDO
// ============================================================
const NovoPedido = ({ user, pedidos, setPedidos, setScreen }) => {
  const [etapa, setEtapa] = useState(1); // 1=cliente 2=produtos 3=revisao 4=sucesso
  const [clienteSel, setClienteSel] = useState(null);
  const [buscaCli, setBuscaCli] = useState("");
  const [buscaProd, setBuscaProd] = useState("");
  const [itensPedido, setItensPedido] = useState([]);
  const [qtdTemp, setQtdTemp] = useState({});
  const [pedidoCriado, setPedidoCriado] = useState(null);

  const clientesFiltrados = CLIENTES.filter(c =>
    !buscaCli || c.nome.toLowerCase().includes(buscaCli.toLowerCase()) || c.cnpj.includes(buscaCli)
  );

  const produtosFiltrados = PRODUTOS.filter(p =>
    !buscaProd || p.nome.toLowerCase().includes(buscaProd.toLowerCase()) || p.ean.includes(buscaProd) || p.cod.includes(buscaProd)
  );

  const total = itensPedido.reduce((a, it) => a + it.qtd * it.pcUnit, 0);

  const adicionarItem = (prod) => {
    const qtd = parseInt(qtdTemp[prod.cod] || 1);
    if (qtd < 1) return;
    setItensPedido(prev => {
      const existe = prev.find(it => it.cod === prod.cod);
      if (existe) return prev.map(it => it.cod === prod.cod ? { ...it, qtd: it.qtd + qtd } : it);
      return [...prev, { cod:prod.cod, nome:prod.nome, un:prod.un, pcUnit:prod.pcVenda, qtd, estoque:estTotal(prod) }];
    });
    setQtdTemp(q => ({ ...q, [prod.cod]:1 }));
  };

  const removerItem = (cod) => setItensPedido(prev => prev.filter(it => it.cod !== cod));
  const alterarQtd  = (cod, v) => setItensPedido(prev => prev.map(it => it.cod === cod ? { ...it, qtd: Math.max(1, v) } : it));

  const confirmarPedido = () => {
    const novo = {
      id: novoPedId(pedidos),
      clienteId: clienteSel.id,
      data: hoje(),
      status: "separando",
      vendedor: user.nome.split(" ")[0],
      total,
      itens: itensPedido,
    };
    setPedidos(p => [novo, ...p]);
    setPedidoCriado(novo);
    setEtapa(4);
  };

  // ETAPA 4 — SUCESSO
  if (etapa === 4 && pedidoCriado) return (
    <div className="scale-in" style={{ textAlign:"center", padding:"60px 20px" }}>
      <div style={{ fontSize:72, marginBottom:20 }}>🎉</div>
      <div className="condensed" style={{ fontSize:32, fontWeight:800, color:T.green, marginBottom:8 }}>Pedido Realizado!</div>
      <div style={{ fontSize:15, color:T.textSub, marginBottom:6 }}>{pedidoCriado.id} - {nomeCli(pedidoCriado.clienteId)}</div>
      <div style={{ fontSize:13, color:T.textMuted, marginBottom:32 }}>{pedidoCriado.itens.length} item(s) - {hoje()}</div>
      <div style={{ display:"inline-block", background:T.greenLight, border:`2px solid ${T.green}`, borderRadius:16, padding:"20px 48px", marginBottom:36 }}>
        <div style={{ fontSize:13, color:T.textMuted, marginBottom:4 }}>Total do Pedido</div>
        <div className="condensed" style={{ fontSize:40, fontWeight:900, color:T.green }}>{fmtR(pedidoCriado.total)}</div>
      </div>
      <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
        <button className="btn-ghost" onClick={()=>{ setEtapa(1); setClienteSel(null); setItensPedido([]); setBuscaCli(""); setBuscaProd(""); }}>+ Novo Pedido</button>
        <button className="btn-primary" onClick={()=>setScreen("pedidos")}>Ver Pedidos</button>
      </div>
    </div>
  );

  return (
    <div>
      {/* Header com etapas */}
      <div className="fade-up" style={{ marginBottom:24 }}>
        <div className="condensed" style={{ fontSize:26, fontWeight:800, marginBottom:16 }}>Novo Pedido</div>
        <div style={{ display:"flex", gap:0, alignItems:"center" }}>
          {[["1","Cliente"],["2","Produtos"],["3","Revisao"]].map(([n, label], i) => {
            const num = parseInt(n);
            const ativo = etapa >= num;
            const atual = etapa === num;
            return (
              <div key={n} style={{ display:"flex", alignItems:"center" }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, cursor: etapa > num ? "pointer" : "default" }} onClick={()=>{ if(etapa > num) setEtapa(num); }}>
                  <div style={{ width:30, height:30, borderRadius:"50%", background:atual?T.accent:ativo?T.green:T.border, color:ativo?"#fff":T.textMuted, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:800, transition:"all .3s" }}>{ativo&&!atual?"✓":n}</div>
                  <span style={{ fontSize:13, fontWeight:atual?700:500, color:atual?T.accent:ativo?T.green:T.textMuted }}>{label}</span>
                </div>
                {i < 2 && <div style={{ width:32, height:2, background:etapa>num?T.green:T.border, margin:"0 8px", transition:"background .3s" }} />}
              </div>
            );
          })}
        </div>
      </div>

      {/* ETAPA 1 — SELECIONAR CLIENTE */}
      {etapa === 1 && (
        <div className="fade-up-1">
          <div style={{ fontSize:14, fontWeight:700, marginBottom:14 }}>Selecione o Cliente</div>
          <input className="input-field" value={buscaCli} onChange={e=>setBuscaCli(e.target.value)} placeholder="Buscar por nome ou CNPJ..." style={{ marginBottom:14 }} />
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {clientesFiltrados.map(c => (
              <div key={c.id} className="card card-clickable" style={{ borderLeft:`4px solid ${clienteSel?.id===c.id?T.accent:T.border}`, background:clienteSel?.id===c.id?T.accentLight:T.white }} onClick={()=>setClienteSel(c)}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                  <div>
                    <div style={{ fontSize:15, fontWeight:700, marginBottom:4 }}>{c.nome}</div>
                    <div className="mono" style={{ fontSize:11, color:T.textMuted, marginBottom:4 }}>{c.cnpj}</div>
                    <div style={{ fontSize:12, color:T.textSub }}>{c.end}</div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontSize:11, color:T.textMuted }}>Limite</div>
                    <div style={{ fontSize:13, fontWeight:700, color:T.green }}>{fmtR(c.limite)}</div>
                    {clienteSel?.id===c.id && <span className="badge" style={{ background:T.accentLight, color:T.accent, marginTop:6 }}>Selecionado</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:20 }}>
            <button className="btn-primary" onClick={()=>setEtapa(2)} disabled={!clienteSel} style={{ width:"100%" }}>
              Continuar para Produtos →
            </button>
          </div>
        </div>
      )}

      {/* ETAPA 2 — ADICIONAR PRODUTOS */}
      {etapa === 2 && (
        <div className="fade-up-1">
          {/* Cliente selecionado */}
          <div className="card" style={{ marginBottom:16, background:T.accentLight, borderColor:T.accent, padding:"14px 18px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div>
              <div style={{ fontSize:11, color:T.accent, fontWeight:600 }}>CLIENTE SELECIONADO</div>
              <div style={{ fontSize:15, fontWeight:700, marginTop:2 }}>{clienteSel.nome}</div>
            </div>
            <button className="btn-ghost" style={{ height:32, fontSize:12 }} onClick={()=>setEtapa(1)}>Trocar</button>
          </div>

          {/* Carrinho resumo */}
          {itensPedido.length > 0 && (
            <div className="card" style={{ marginBottom:16, borderColor:T.green, background:T.greenLight, padding:"14px 18px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
                <div style={{ fontSize:13, fontWeight:700, color:T.green }}>{itensPedido.length} item(s) no pedido</div>
                <div className="condensed" style={{ fontSize:20, fontWeight:800, color:T.green }}>{fmtR(total)}</div>
              </div>
              {itensPedido.map(it => (
                <div key={it.cod} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 0", borderTop:`1px solid ${T.green}22`, fontSize:13 }}>
                  <span style={{ flex:1 }}>{it.nome}</span>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <button onClick={()=>alterarQtd(it.cod, it.qtd-1)} style={{ width:26, height:26, borderRadius:6, background:T.white, border:`1px solid ${T.border}`, cursor:"pointer", fontWeight:700 }}>-</button>
                    <span style={{ fontWeight:700, minWidth:24, textAlign:"center" }}>{it.qtd}</span>
                    <button onClick={()=>alterarQtd(it.cod, it.qtd+1)} style={{ width:26, height:26, borderRadius:6, background:T.white, border:`1px solid ${T.border}`, cursor:"pointer", fontWeight:700 }}>+</button>
                    <span style={{ color:T.green, fontWeight:700, minWidth:70, textAlign:"right" }}>{fmtR(it.qtd*it.pcUnit)}</span>
                    <button className="btn-danger" style={{ width:26, height:26, padding:0, justifyContent:"center" }} onClick={()=>removerItem(it.cod)}>X</button>
                  </div>
                </div>
              ))}
              <button className="btn-primary" onClick={()=>setEtapa(3)} style={{ width:"100%", marginTop:14 }}>
                Revisar Pedido →
              </button>
            </div>
          )}

          {/* Busca de produto */}
          <div style={{ fontSize:14, fontWeight:700, marginBottom:12 }}>Adicionar Produtos</div>
          <input className="input-field" value={buscaProd} onChange={e=>setBuscaProd(e.target.value)} placeholder="Buscar por nome, EAN ou codigo..." style={{ marginBottom:14 }} autoFocus />

          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {produtosFiltrados.slice(0, 15).map(p => {
              const est = estTotal(p);
              const jaNoCarrinho = itensPedido.find(it => it.cod === p.cod);
              return (
                <div key={p.cod} className="card" style={{ padding:"14px 16px", borderLeft:`3px solid ${jaNoCarrinho?T.green:baixo(p)?T.red:T.border}` }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                        <span style={{ fontSize:15 }}>{iconCat(p.cat)}</span>
                        <span style={{ fontWeight:700, fontSize:13 }}>{p.nome}</span>
                        {jaNoCarrinho && <span className="badge" style={{ background:T.greenLight, color:T.green }}>No pedido: {jaNoCarrinho.qtd}</span>}
                      </div>
                      <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                        <span className="badge" style={{ background:T.accentLight, color:T.accent }}>{p.local}</span>
                        <span className="badge" style={{ background:baixo(p)?T.redLight:T.greenLight, color:baixo(p)?T.red:T.green }}>{est} {p.un} em estoque</span>
                        <span className="badge" style={{ background:T.amberLight, color:T.amber }}>{fmtR(p.pcVenda)}/{p.un}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                    <button onClick={()=>setQtdTemp(q=>({...q,[p.cod]:Math.max(1,(q[p.cod]||1)-1)}))} style={{ width:36, height:36, borderRadius:8, background:T.bg, border:`1.5px solid ${T.border}`, fontSize:18, cursor:"pointer", fontWeight:700 }}>-</button>
                    <input type="number" min="1" value={qtdTemp[p.cod]||1} onChange={e=>setQtdTemp(q=>({...q,[p.cod]:parseInt(e.target.value)||1}))}
                      style={{ width:60, textAlign:"center", background:T.bg, border:`1.5px solid ${T.border}`, borderRadius:8, height:36, fontSize:14, fontWeight:700, outline:"none" }} />
                    <button onClick={()=>setQtdTemp(q=>({...q,[p.cod]:(q[p.cod]||1)+1}))} style={{ width:36, height:36, borderRadius:8, background:T.bg, border:`1.5px solid ${T.border}`, fontSize:18, cursor:"pointer", fontWeight:700 }}>+</button>
                    <button className="btn-primary" onClick={()=>adicionarItem(p)} style={{ flex:1, height:36, fontSize:13 }}>
                      {jaNoCarrinho ? "+ Adicionar Mais" : "Adicionar"}
                    </button>
                  </div>
                </div>
              );
            })}
            {produtosFiltrados.length === 0 && <div style={{ textAlign:"center", padding:32, color:T.textMuted, fontSize:13 }}>Nenhum produto encontrado.</div>}
          </div>

          {itensPedido.length === 0 && (
            <div style={{ marginTop:16 }}>
              <button className="btn-ghost" onClick={()=>setEtapa(1)} style={{ width:"100%", justifyContent:"center" }}>← Voltar para Cliente</button>
            </div>
          )}
        </div>
      )}

      {/* ETAPA 3 — REVISAO */}
      {etapa === 3 && (
        <div className="fade-up-1">
          <div style={{ fontSize:14, fontWeight:700, marginBottom:16 }}>Revisar e Confirmar</div>

          {/* Resumo cliente */}
          <div className="card" style={{ marginBottom:14, borderLeft:`4px solid ${T.accent}` }}>
            <div style={{ fontSize:11, color:T.textMuted, marginBottom:4 }}>CLIENTE</div>
            <div style={{ fontSize:16, fontWeight:700 }}>{clienteSel.nome}</div>
            <div style={{ fontSize:12, color:T.textSub, marginTop:2 }}>{clienteSel.cnpj} - {clienteSel.end}</div>
            <div style={{ fontSize:12, color:T.textSub, marginTop:2 }}>{clienteSel.fone}</div>
          </div>

          {/* Lista de itens */}
          <div className="card" style={{ marginBottom:14, padding:0, overflow:"hidden" }}>
            <div style={{ padding:"12px 16px", background:T.bg, fontSize:11, fontWeight:700, color:T.textMuted, letterSpacing:.5, textTransform:"uppercase", display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr" }}>
              <span>Produto</span><span style={{textAlign:"center"}}>Qtd</span><span style={{textAlign:"right"}}>Preco Unit.</span><span style={{textAlign:"right"}}>Subtotal</span>
            </div>
            {itensPedido.map((it, i) => (
              <div key={it.cod} style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", padding:"12px 16px", borderTop:i>0?`1px solid ${T.border}`:"none", alignItems:"center" }}>
                <div style={{ fontSize:13, fontWeight:600 }}>{it.nome}</div>
                <div style={{ textAlign:"center", fontSize:13 }}>{it.qtd} {it.un}</div>
                <div style={{ textAlign:"right", fontSize:13, color:T.textSub }}>{fmtR(it.pcUnit)}</div>
                <div style={{ textAlign:"right", fontSize:14, fontWeight:700, color:T.green }}>{fmtR(it.qtd*it.pcUnit)}</div>
              </div>
            ))}
            <div style={{ padding:"14px 16px", borderTop:`2px solid ${T.border}`, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ fontSize:14, fontWeight:700 }}>TOTAL DO PEDIDO</span>
              <span className="condensed" style={{ fontSize:28, fontWeight:900, color:T.green }}>{fmtR(total)}</span>
            </div>
          </div>

          {/* Info pedido */}
          <div className="card" style={{ marginBottom:20, padding:"14px 18px" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {[["Vendedor",user.nome],["Data",hoje()],["Itens",itensPedido.length],["Status","Separando"]].map(([k,v])=>(
                <div key={k}>
                  <div style={{ fontSize:11, color:T.textMuted }}>{k}</div>
                  <div style={{ fontSize:13, fontWeight:600, marginTop:2 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <button className="btn-ghost" onClick={()=>setEtapa(2)} style={{ justifyContent:"center" }}>← Voltar</button>
            <button className="btn-primary" onClick={confirmarPedido} style={{ background:T.green }}>
              Confirmar Pedido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================
//  PEDIDOS
// ============================================================
const Pedidos = ({ pedidos, setScreen }) => {
  const [tab, setTab] = useState("todos");
  const [sel, setSel] = useState(null);
  const tabs = [["todos","Todos"],["separando","Separando"],["em_rota","Em Rota"],["entregue","Entregue"]];
  const filtered = tab==="todos" ? pedidos : pedidos.filter(p=>p.status===tab);
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
        <div>
          <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:4 }}>Pedidos</div>
          <div className="fade-up-1" style={{ fontSize:13, color:T.textMuted }}>{pedidos.length} pedidos hoje</div>
        </div>
        <button className="btn-primary fade-up" onClick={()=>setScreen("novo_pedido")} style={{ height:40, fontSize:13 }}>+ Novo Pedido</button>
      </div>
      <div className="fade-up-1 tab-bar" style={{ marginBottom:20 }}>
        {tabs.map(([id,label]) => <button key={id} className={`tab ${tab===id?"active":""}`} onClick={()=>setTab(id)}>{label}</button>)}
      </div>
      <div className="fade-up-2" style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {filtered.map(p => (
          <div key={p.id} className="card card-clickable" style={{ borderLeft:`4px solid ${sc(p.status)}`, padding:"16px 20px" }} onClick={()=>setSel(sel===p.id?null:p.id)}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
                  <span style={{ fontSize:15, fontWeight:700 }}>{nomeCli(p.clienteId)}</span>
                  <Badge status={p.status} />
                </div>
                <div style={{ fontSize:12, color:T.textMuted }}>{p.id} - {p.itens.length} itens - {p.vendedor} - {p.data}</div>
              </div>
              <div className="condensed" style={{ fontSize:22, fontWeight:800, color:T.green }}>{fmtR(p.total)}</div>
            </div>
            {sel===p.id && (
              <div style={{ marginTop:16, borderTop:`1px solid ${T.border}`, paddingTop:16 }}>
                <div style={{ fontSize:12, fontWeight:700, color:T.textMuted, marginBottom:10, textTransform:"uppercase", letterSpacing:.4 }}>Itens do Pedido</div>
                {p.itens.map((it,i) => (
                  <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"8px 0", borderBottom:`1px solid ${T.border}`, fontSize:13 }}>
                    <span>{it.nome || it.cod}</span>
                    <span style={{ color:T.textMuted }}>{it.qtd} x {fmtR(it.pcUnit)} = <strong style={{ color:T.green }}>{fmtR(it.qtd*it.pcUnit)}</strong></span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && <div className="card" style={{ textAlign:"center", padding:32, color:T.textMuted }}>Nenhum pedido com este status.</div>}
      </div>
    </div>
  );
};

// ============================================================
//  DASHBOARD
// ============================================================
const Dashboard = ({ pedidos, setScreen }) => {
  const faturado = pedidos.filter(p=>p.status==="entregue").reduce((a,p)=>a+p.total,0);
  const emAberto = pedidos.filter(p=>!["entregue","cancelado"].includes(p.status)).reduce((a,p)=>a+p.total,0);
  const totalEstq = PRODUTOS.reduce((a,p)=>a+estTotal(p)*p.pcCusto,0);
  const qtdBaixo = PRODUTOS.filter(baixo).length;
  return (
    <div>
      <div style={{ marginBottom:24 }}>
        <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800 }}>Dashboard Comercial</div>
        <div className="fade-up-1" style={{ fontSize:13, color:T.textMuted }}>Visao geral - {hoje()}</div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))", gap:14, marginBottom:24 }}>
        <KPI label="Faturamento" value={fmtR(faturado)} sub="pedidos entregues" color={T.green} icon="💰" />
        <KPI label="Em Aberto" value={fmtR(emAberto)} sub="aguardando" color={T.amber} icon="⏳" />
        <KPI label="Pedidos" value={pedidos.length} sub="total do dia" color={T.accent} icon="📋" />
        <KPI label="Estoque" value={fmtR(totalEstq)} sub={`${qtdBaixo} em falta`} color={T.purple} icon="🗃" />
      </div>

      {/* Botao destaque novo pedido */}
      <div className="fade-up-1 card" style={{ marginBottom:24, background:`linear-gradient(135deg,${T.accent},#60A5FA)`, border:"none", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px 24px" }}>
        <div>
          <div style={{ fontSize:16, fontWeight:800, color:"#fff" }}>Fazer um novo pedido</div>
          <div style={{ fontSize:13, color:"rgba(255,255,255,.7)", marginTop:4 }}>Selecione cliente, produtos e confirme</div>
        </div>
        <button onClick={()=>setScreen("novo_pedido")} style={{ background:"#fff", color:T.accent, border:"none", borderRadius:10, padding:"10px 20px", fontWeight:700, fontSize:14, cursor:"pointer" }}>
          + Novo Pedido
        </button>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:24 }}>
        <div className="fade-up-2">
          <div style={{ fontSize:14, fontWeight:700, marginBottom:14 }}>Status dos Roteiros</div>
          <div className="card" style={{ padding:"16px 20px", display:"flex", flexDirection:"column", gap:16 }}>
            {ROTEIROS_DB.map(r => (
              <div key={r.id}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                  <div><div style={{ fontSize:13, fontWeight:600 }}>{r.nome}</div><div style={{ fontSize:11, color:T.textMuted }}>{r.motorista}</div></div>
                  <Badge status={r.status} />
                </div>
                <Progress value={r.status==="concluido"?r.itens:r.status==="em_andamento"?32:0} max={r.itens} color={sc(r.status)} />
              </div>
            ))}
          </div>
        </div>
        <div className="fade-up-3">
          <div style={{ fontSize:14, fontWeight:700, marginBottom:14 }}>Ultimos Pedidos</div>
          <div className="card" style={{ padding:"8px 0" }}>
            {pedidos.slice(0,5).map(p => (
              <div key={p.id} className="table-row" style={{ gridTemplateColumns:"1fr auto" }}>
                <div><div style={{ fontSize:13, fontWeight:600 }}>{nomeCli(p.clienteId)}</div><div style={{ fontSize:11, color:T.textMuted }}>{p.id} - {p.vendedor}</div></div>
                <div style={{ textAlign:"right" }}><div style={{ fontSize:13, fontWeight:700, color:T.green }}>{fmtR(p.total)}</div><Badge status={p.status} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fade-up-4">
        <div style={{ fontSize:14, fontWeight:700, marginBottom:14 }}>Alertas de Estoque Baixo</div>
        <div className="card" style={{ padding:0, overflow:"hidden" }}>
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", padding:"10px 16px", background:T.bg, fontSize:11, fontWeight:700, color:T.textMuted, letterSpacing:.5, textTransform:"uppercase" }}>
            <span>Produto</span><span>Local</span><span style={{textAlign:"center"}}>Estoque</span><span style={{textAlign:"center"}}>Minimo</span>
          </div>
          {PRODUTOS.filter(baixo).map((p,i) => (
            <div key={p.cod} className="table-row" style={{ gridTemplateColumns:"2fr 1fr 1fr 1fr", borderTop:i>0?`1px solid ${T.border}`:"none", borderRadius:0 }}>
              <div style={{ fontSize:13, fontWeight:600, alignSelf:"center" }}>{p.nome}</div>
              <div className="mono" style={{ fontSize:12, color:T.accent, alignSelf:"center" }}>{p.local}</div>
              <div style={{ textAlign:"center", alignSelf:"center" }}><span className="badge" style={{ background:T.redLight, color:T.red }}>{estTotal(p)} {p.un}</span></div>
              <div style={{ textAlign:"center", fontSize:13, color:T.textMuted, alignSelf:"center" }}>{p.minEstq}</div>
            </div>
          ))}
          {PRODUTOS.filter(baixo).length === 0 && <div style={{ padding:24, textAlign:"center", fontSize:13, color:T.textMuted }}>Nenhum produto em falta.</div>}
        </div>
      </div>
    </div>
  );
};

// ============================================================
//  FATURAMENTO
// ============================================================
const Faturamento = () => {
  const total    = NOTAS_DB.reduce((a,n)=>a+n.valor,0);
  const pagas    = NOTAS_DB.filter(n=>n.status==="paga").reduce((a,n)=>a+n.valor,0);
  const abertas  = NOTAS_DB.filter(n=>n.status==="aberta").reduce((a,n)=>a+n.valor,0);
  const vencidas = NOTAS_DB.filter(n=>n.status==="vencida").reduce((a,n)=>a+n.valor,0);
  return (
    <div>
      <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Faturamento</div>
      <div className="fade-up-1" style={{ fontSize:13, color:T.textMuted, marginBottom:20 }}>Notas Fiscais - Maio 2025</div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))", gap:14, marginBottom:24 }}>
        <KPI label="Total Emitido" value={fmtR(total)}    color={T.accent} icon="📄" />
        <KPI label="Recebido"      value={fmtR(pagas)}    color={T.green}  icon="✅" sub={`${NOTAS_DB.filter(n=>n.status==="paga").length} notas`} />
        <KPI label="Em Aberto"     value={fmtR(abertas)}  color={T.amber}  icon="⏳" sub={`${NOTAS_DB.filter(n=>n.status==="aberta").length} notas`} />
        <KPI label="Vencido"       value={fmtR(vencidas)} color={T.red}    icon="!" sub="Atencao" />
      </div>
      <div className="fade-up-2" style={{ marginBottom:20 }}>
        <Progress value={pagas} max={total} color={T.green} label="Taxa de Recebimento" />
      </div>
      <div className="fade-up-3">
        <div style={{ fontSize:14, fontWeight:700, marginBottom:14 }}>Notas Fiscais</div>
        <div className="card" style={{ padding:0, overflow:"hidden" }}>
          <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr", padding:"10px 20px", background:T.bg, fontSize:11, fontWeight:700, color:T.textMuted, letterSpacing:.4, textTransform:"uppercase" }}>
            <span>Cliente</span><span>NF</span><span>Emissao</span><span style={{textAlign:"right"}}>Valor</span><span style={{textAlign:"right"}}>Situacao</span>
          </div>
          {NOTAS_DB.map((n,i) => (
            <div key={n.nf} className="table-row" style={{ gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr", borderTop:`1px solid ${T.border}`, borderRadius:0, padding:"14px 20px" }}>
              <div style={{ fontSize:13, fontWeight:600, alignSelf:"center" }}>{nomeCli(n.clienteId)}</div>
              <div className="mono" style={{ fontSize:13, color:T.accent, alignSelf:"center" }}>{n.nf}</div>
              <div style={{ fontSize:13, color:T.textSub, alignSelf:"center" }}>{n.emissao}</div>
              <div style={{ fontSize:14, fontWeight:700, alignSelf:"center", textAlign:"right" }}>{fmtR(n.valor)}</div>
              <div style={{ alignSelf:"center", textAlign:"right" }}><Badge status={n.status} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================
//  CLIENTES
// ============================================================
const Clientes = ({ pedidos }) => {
  const [sel, setSel] = useState(null);
  return (
    <div>
      <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Clientes</div>
      <div className="fade-up-1" style={{ fontSize:13, color:T.textMuted, marginBottom:20 }}>{CLIENTES.length} clientes cadastrados</div>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {CLIENTES.map((c,i) => {
          const pedidosCliente = pedidos.filter(p=>p.clienteId===c.id);
          const totalCompras = pedidosCliente.reduce((a,p)=>a+p.total,0);
          return (
            <div key={c.id} className="card card-clickable fade-up" style={{ animationDelay:`${i*.04}s` }} onClick={()=>setSel(sel===c.id?null:c.id)}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                <div>
                  <div style={{ fontSize:15, fontWeight:700, marginBottom:4 }}>{c.nome}</div>
                  <div className="mono" style={{ fontSize:11, color:T.textMuted, marginBottom:4 }}>{c.cnpj}</div>
                  <div style={{ fontSize:12, color:T.textSub }}>{c.end} - {c.fone}</div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontSize:13, fontWeight:700, color:T.green }}>{fmtR(totalCompras)}</div>
                  <div style={{ fontSize:11, color:T.textMuted, marginTop:2 }}>{pedidosCliente.length} pedido(s)</div>
                </div>
              </div>
              {sel===c.id && (
                <div style={{ marginTop:14, borderTop:`1px solid ${T.border}`, paddingTop:14, display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12 }}>
                  {[["Limite",fmtR(c.limite),T.accent],["Saldo",fmtR(c.saldo),c.saldo>0?T.amber:T.green],["Compras",fmtR(totalCompras),T.purple]].map(([l,v,cor]) => (
                    <div key={l} style={{ background:T.bg, borderRadius:8, padding:"10px 12px", textAlign:"center" }}>
                      <div style={{ fontSize:11, color:T.textMuted }}>{l}</div>
                      <div className="condensed" style={{ fontSize:16, fontWeight:800, color:cor, marginTop:4 }}>{v}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ============================================================
//  ROTEIROS
// ============================================================
const Roteiros = () => (
  <div>
    <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Roteiros</div>
    <div className="fade-up-1" style={{ fontSize:13, color:T.textMuted, marginBottom:20 }}>Controle de rotas</div>
    {ROTEIROS_DB.map((r,i) => (
      <div key={r.id} className="card card-clickable fade-up" style={{ animationDelay:`${i*.05}s`, marginBottom:14, borderLeft:`4px solid ${sc(r.status)}` }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
              <span className="mono" style={{ fontSize:12, color:T.accent }}>{r.id}</span>
              <Badge status={r.status} />
            </div>
            <div style={{ fontSize:16, fontWeight:700 }}>{r.nome}</div>
            <div style={{ fontSize:12, color:T.textMuted, marginTop:2 }}>Motorista: {r.motorista} - Saida: {r.saida} - Prev: {r.prev}</div>
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, marginBottom:16 }}>
          {[["Clientes",r.clientes,T.accent],["Itens",r.itens,T.purple],["Peso",`${r.peso}kg`,T.amber],["Volume",`${r.vol}m3`,T.cyan]].map(([l,v,c]) => (
            <div key={l} style={{ textAlign:"center" }}>
              <div className="condensed" style={{ fontSize:20, fontWeight:800, color:c }}>{v}</div>
              <div style={{ fontSize:11, color:T.textMuted }}>{l}</div>
            </div>
          ))}
        </div>
        <Progress value={r.status==="concluido"?r.itens:r.status==="em_andamento"?32:0} max={r.itens} color={sc(r.status)} label="Progresso" />
      </div>
    ))}
  </div>
);

// ============================================================
//  PRODUTOS
// ============================================================
const Produtos = () => {
  const [q, setQ] = useState("");
  const [catFiltro, setCatFiltro] = useState("TODAS");
  const filtered = PRODUTOS.filter(p =>
    (catFiltro==="TODAS" || p.cat===catFiltro) &&
    (!q || p.nome.toLowerCase().includes(q.toLowerCase()) || p.ean.includes(q) || p.cod.includes(q) || p.local.toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <div>
      <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Produtos</div>
      <div className="fade-up-1" style={{ fontSize:13, color:T.textMuted, marginBottom:16 }}>{PRODUTOS.length} produtos - {PRODUTOS.filter(baixo).length} com estoque baixo</div>
      <input className="input-field fade-up-1" value={q} onChange={e=>setQ(e.target.value)} placeholder="Filtrar por nome, EAN, codigo ou local..." style={{ marginBottom:12 }} />
      <div className="fade-up-1" style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:16 }}>
        <button onClick={()=>setCatFiltro("TODAS")} className={catFiltro==="TODAS"?"btn-primary":"btn-ghost"} style={{ height:34, fontSize:12, padding:"0 14px" }}>Todas</button>
        {CATEGORIAS.map(c => (
          <button key={c.id} onClick={()=>setCatFiltro(c.id)} className={catFiltro===c.id?"btn-primary":"btn-ghost"} style={{ height:34, fontSize:12, padding:"0 14px" }}>{c.icon} {c.nome}</button>
        ))}
      </div>
      <div style={{ fontSize:12, color:T.textMuted, marginBottom:10 }}>{filtered.length} resultado(s)</div>
      {filtered.map((p,i) => {
        const est = estTotal(p); const emFalta = baixo(p);
        return (
          <div key={p.cod} className="card card-clickable fade-up" style={{ animationDelay:`${i*.02}s`, marginBottom:10, borderLeft:`3px solid ${emFalta?T.red:T.green}` }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                  <span style={{ fontSize:16 }}>{iconCat(p.cat)}</span>
                  <span style={{ fontWeight:700, fontSize:14 }}>{p.nome}</span>
                  {emFalta && <span className="badge" style={{ background:T.redLight, color:T.red }}>Estoque Baixo</span>}
                </div>
                <div className="mono" style={{ fontSize:11, color:T.accent, marginBottom:8 }}>{p.ean}</div>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                  <span className="badge" style={{ background:T.accentLight, color:T.accent }}>Local: {p.local}</span>
                  <span className="badge" style={{ background:emFalta?T.redLight:T.greenLight, color:emFalta?T.red:T.green }}>{est} {p.un}</span>
                  <span className="badge" style={{ background:T.amberLight, color:T.amber }}>{fmtR(p.pcVenda)}</span>
                  <span className="badge" style={{ background:T.purpleLight, color:T.purple }}>{fmtMarg(p.margem)}</span>
                </div>
              </div>
              <div style={{ textAlign:"right", marginLeft:12 }}>
                <div className="mono" style={{ fontSize:11, color:T.textMuted }}>{p.cod}</div>
                <div style={{ fontSize:12, color:T.textMuted, marginTop:2 }}>Val: {p.val}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ============================================================
//  SEPARADOR / CONFERENTE / MOTORISTA — telas simples
// ============================================================
const Atividade = () => (
  <div>
    <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Atividade Ativa</div>
    <div className="fade-up-1" style={{ display:"flex", gap:8, marginBottom:20 }}>
      <Badge status="em_andamento" /><span className="mono" style={{ fontSize:12, color:T.textMuted }}>#3885467</span>
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
      <KPI label="Roteiro" value="225151" color={T.accent} icon="🗺" />
      <KPI label="Progresso" value="32/48" sub="66% concluido" color={T.green} icon="📦" />
    </div>
    <div className="card fade-up-2" style={{ marginBottom:14 }}>
      <div style={{ fontSize:12, fontWeight:700, color:T.textMuted, marginBottom:14, textTransform:"uppercase" }}>Ruas do Armazem</div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8 }}>
        {["A","B","C","D","E","F"].map(r => {
          const active = ["A","B"].includes(r);
          return <div key={r} style={{ borderRadius:10, padding:"14px 0", textAlign:"center", background:active?T.accentLight:T.bg, border:`1.5px solid ${active?T.accent:T.border}` }}>
            <div className="condensed" style={{ fontSize:20, fontWeight:800, color:active?T.accent:T.textMuted }}>RUA {r}</div>
            <div style={{ fontSize:11, color:active?T.accent:T.textMuted }}>{active?"Pendente":"Livre"}</div>
          </div>;
        })}
      </div>
    </div>
    <div className="card fade-up-3" style={{ marginBottom:14 }}><Progress value={32} max={48} color={T.green} label="Itens Separados" /></div>
    <div className="fade-up-4" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
      <button className="btn-ghost">Suspender</button>
      <button className="btn-primary">Continuar</button>
    </div>
  </div>
);

const Separacao = () => {
  const [qty, setQty] = useState(1);
  const [scanned, setScanned] = useState(0);
  const [input, setInput] = useState("");
  const [flash, setFlash] = useState(false);
  const prod = PRODUTOS[0];
  const confirm = () => { if (!input.trim()) return; setFlash(true); setScanned(s=>s+qty); setInput(""); setTimeout(()=>setFlash(false),500); };
  return (
    <div>
      <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Separacao</div>
      <div className="fade-up-1" style={{ fontSize:13, color:T.textMuted, marginBottom:20 }}>Roteiro 225151 - PRES PRUDENTE</div>
      <div className="card fade-up-1" style={{ marginBottom:14, borderLeft:`4px solid ${flash?T.green:T.accent}`, transition:"border-color .3s" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
          <div><div className="mono" style={{ fontSize:11, color:T.textMuted, marginBottom:4 }}>{prod.cod}</div><div style={{ fontSize:15, fontWeight:700 }}>{prod.nome}</div></div>
          <Badge status="em_andamento">Pendente</Badge>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:14 }}>
          <div style={{ background:T.amberLight, borderRadius:8, padding:"10px 12px" }}><div style={{ fontSize:11, color:T.amber }}>Preco</div><div className="condensed" style={{ fontSize:18, fontWeight:800, color:T.amber }}>{fmtR(prod.pcVenda)}</div></div>
          <div style={{ background:T.greenLight, borderRadius:8, padding:"10px 12px" }}><div style={{ fontSize:11, color:T.green }}>Estoque</div><div className="condensed" style={{ fontSize:18, fontWeight:800, color:T.green }}>{estTotal(prod)} {prod.un}</div></div>
        </div>
        <div style={{ background:scanned>=6?T.greenLight:T.amberLight, border:`1.5px solid ${scanned>=6?T.green:T.amber}`, borderRadius:10, padding:"14px", textAlign:"center", marginBottom:14 }}>
          <div className="condensed" style={{ fontSize:28, fontWeight:900, color:scanned>=6?T.green:T.amber }}>SEPARAR 6 UN</div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
          <div style={{ textAlign:"center" }}><div className="condensed" style={{ fontSize:32, fontWeight:900, color:scanned>0?T.green:T.textMuted }}>{scanned}</div><div style={{ fontSize:11, color:T.textMuted }}>SEPARADO</div></div>
          <div style={{ textAlign:"center" }}><div className="condensed" style={{ fontSize:32, fontWeight:900, color:T.textMuted }}>0</div><div style={{ fontSize:11, color:T.textMuted }}>FRACIONADO</div></div>
        </div>
      </div>
      <div className="card fade-up-2" style={{ marginBottom:14 }}>
        <div className="scan-line" style={{ marginBottom:12 }} />
        <div className="mono" style={{ fontSize:13, color:T.accent, marginBottom:12 }}>{prod.ean}</div>
        <input className="input-field" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&confirm()} placeholder="Bipe ou digite o codigo..." />
        <div style={{ display:"flex", gap:8, marginTop:12, alignItems:"center" }}>
          <button onClick={()=>setQty(q=>Math.max(1,q-1))} style={{ width:42, height:42, borderRadius:10, background:T.bg, border:`1.5px solid ${T.border}`, fontSize:20, cursor:"pointer", fontWeight:700 }}>-</button>
          <div style={{ flex:1, textAlign:"center", fontWeight:700, fontSize:16 }}>Qtd: {qty}</div>
          <button onClick={()=>setQty(q=>q+1)} style={{ width:42, height:42, borderRadius:10, background:T.bg, border:`1.5px solid ${T.border}`, fontSize:20, cursor:"pointer", fontWeight:700 }}>+</button>
          <button className="btn-primary" onClick={confirm} style={{ flex:2 }}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

const Bipagem = () => {
  const [q, setQ] = useState("");
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [miss, setMiss] = useState(false);
  const search = (term) => {
    const t=(term||q).trim().toLowerCase(); if(!t)return;
    setLoading(true);setRes(null);setMiss(false);
    setTimeout(()=>{ const found=PRODUTOS.find(p=>p.ean===t||p.cod===t||p.nome.toLowerCase().includes(t)||p.local.toLowerCase()===t); setLoading(false); if(found)setRes(found);else setMiss(true); },700);
  };
  return (
    <div>
      <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Consulta de Estoque</div>
      <div className="card fade-up-1" style={{ marginBottom:16 }}>
        <div className="scan-line" style={{ marginBottom:14 }} />
        <div style={{ display:"flex", gap:10 }}>
          <input className="input-field" value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==="Enter"&&search()} placeholder="EAN, codigo, nome, local..." />
          <button className="btn-primary" onClick={()=>search()} style={{ width:56, padding:0 }}>Ok</button>
        </div>
      </div>
      {loading && <div style={{ textAlign:"center", padding:"32px 0" }}><div className="spin" style={{ width:32, height:32, border:`3px solid ${T.border}`, borderTopColor:T.accent, borderRadius:"50%", margin:"0 auto" }} /></div>}
      {miss && <div className="card scale-in" style={{ borderColor:T.red, borderLeftWidth:4, marginBottom:16, textAlign:"center", padding:24 }}><div style={{ fontWeight:700, color:T.red }}>Produto nao encontrado</div></div>}
      {res && (
        <div className="card scale-in" style={{ borderColor:T.green, borderLeftWidth:4, marginBottom:16 }}>
          <Badge status="entregue">Encontrado</Badge>
          <div style={{ fontSize:16, fontWeight:700, margin:"10px 0 4px" }}>{res.nome}</div>
          <div className="mono" style={{ fontSize:13, color:T.accent, marginBottom:16 }}>{res.ean}</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            {[["Local",res.local,T.accent],["Estoque",`${estTotal(res)} ${res.un}`,baixo(res)?T.red:T.green],["Preco",fmtR(res.pcVenda),T.amber],["Margem",fmtMarg(res.margem),T.purple]].map(([k,v,c])=>(
              <div key={k} style={{ background:T.bg, borderRadius:8, padding:"10px 12px" }}>
                <div style={{ fontSize:11, color:T.textMuted }}>{k}</div>
                <div className="mono" style={{ fontSize:13, fontWeight:700, color:c, marginTop:2 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div style={{ fontSize:12, fontWeight:700, color:T.textMuted, marginBottom:10, textTransform:"uppercase" }}>Acesso Rapido</div>
      {PRODUTOS.slice(0,6).map(p => (
        <div key={p.cod} className="card card-clickable" onClick={()=>{setQ(p.ean);search(p.ean);}} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 16px", marginBottom:8 }}>
          <div><div style={{ fontSize:13, fontWeight:600 }}>{p.nome}</div><div className="mono" style={{ fontSize:11, color:T.textMuted }}>{p.ean}</div></div>
          <div style={{ textAlign:"right" }}>
            <div className="mono" style={{ fontSize:12, color:T.accent, fontWeight:600 }}>{p.local}</div>
            <div style={{ fontSize:12, color:baixo(p)?T.red:T.green, fontWeight:600 }}>{estTotal(p)} {p.un}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Historico = () => (
  <div>
    <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Historico</div>
    <div className="fade-up-1" style={{ fontSize:13, color:T.textMuted, marginBottom:20 }}>Atividades encerradas</div>
    {[
      {id:"3885467",rot:"225151",op:"OP416",ini:"11:42",fim:"--",status:"em_andamento",sep:32,tot:48},
      {id:"3885460",rot:"225148",op:"OP412",ini:"09:15",fim:"14:30",status:"concluido",sep:41,tot:41},
      {id:"3885455",rot:"225145",op:"OP408",ini:"08:00",fim:"12:45",status:"concluido",sep:28,tot:28},
    ].map((a,i) => (
      <div key={a.id} className="card card-clickable fade-up" style={{ animationDelay:`${i*.05}s`, marginBottom:10, borderLeft:`4px solid ${sc(a.status)}` }}>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:12 }}>
          <div><span className="mono" style={{ fontSize:12, color:T.accent }}>#{a.id}</span><div style={{ fontSize:13, fontWeight:600, marginTop:2 }}>Roteiro {a.rot} - {a.op}</div></div>
          <Badge status={a.status} />
        </div>
        <Progress value={a.sep} max={a.tot} color={sc(a.status)} label={`${a.sep}/${a.tot} itens`} />
      </div>
    ))}
  </div>
);

const Conferencia = ({ pedidos }) => {
  const [checked, setChecked] = useState({});
  const items = PRODUTOS.slice(0, 7);
  const done = Object.values(checked).filter(Boolean).length;
  return (
    <div>
      <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Conferencia</div>
      <div className="card fade-up-1" style={{ marginBottom:16 }}>
        <Progress value={done} max={items.length} color={done===items.length?T.green:T.accent} label={done===items.length?"Conferencia completa!":`${items.length-done} pendentes`} />
      </div>
      {items.map((p,i) => (
        <div key={p.cod} onClick={()=>setChecked(c=>({...c,[p.cod]:!c[p.cod]}))}
          className="card card-clickable fade-up" style={{ animationDelay:`${i*.04}s`, marginBottom:8, display:"flex", alignItems:"center", gap:12, background:checked[p.cod]?T.greenLight:T.white, borderColor:checked[p.cod]?T.green:T.border }}>
          <div style={{ width:26, height:26, borderRadius:8, background:checked[p.cod]?T.green:T.bg, border:`2px solid ${checked[p.cod]?T.green:T.border}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            {checked[p.cod] && <span style={{ color:"#fff", fontSize:14, fontWeight:900 }}>V</span>}
          </div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:13, fontWeight:checked[p.cod]?400:600 }}>{p.nome}</div>
            <div style={{ fontSize:11, color:T.textMuted }}>{p.local} - {estTotal(p)} {p.un} - {fmtR(p.pcVenda)}</div>
          </div>
          {checked[p.cod] && <span style={{ color:T.green, fontSize:13, fontWeight:700 }}>OK</span>}
        </div>
      ))}
    </div>
  );
};

const Entregas = () => {
  const [sel, setSel] = useState(null);
  const entregues = ENTREGAS_DB.filter(e=>e.status==="entregue").length;
  return (
    <div>
      <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Minhas Entregas</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10, marginBottom:16 }}>
        <KPI label="Paradas" value={ENTREGAS_DB.length} icon="📍" />
        <KPI label="Entregues" value={entregues} color={T.green} icon="✅" />
        <KPI label="Pendentes" value={ENTREGAS_DB.length-entregues} color={T.amber} icon="⏳" />
      </div>
      {ENTREGAS_DB.map((e,i) => {
        const cli = CLIENTES.find(c=>c.id===e.clienteId);
        return (
          <div key={e.idx} className="card card-clickable fade-up" style={{ animationDelay:`${i*.05}s`, marginBottom:10, borderLeft:`4px solid ${sc(e.status)}`, background:sel===e.idx?T.bg:T.white }} onClick={()=>setSel(sel===e.idx?null:e.idx)}>
            <div style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
              <div style={{ width:34, height:34, borderRadius:10, background:sc(e.status)+"18", border:`2px solid ${sc(e.status)}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <span className="condensed" style={{ fontSize:16, fontWeight:900, color:sc(e.status) }}>{e.idx}</span>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                  <div><div style={{ fontSize:14, fontWeight:700 }}>{cli?cli.nome:e.clienteId}</div><div style={{ fontSize:12, color:T.textMuted, marginTop:2 }}>{cli?cli.end:""}</div></div>
                  <Badge status={e.status} />
                </div>
                {sel===e.idx && cli && <div style={{ marginTop:10, fontSize:12, color:T.textSub }}>{cli.fone} - {cli.cnpj}</div>}
                {sel===e.idx && e.status!=="entregue" && (
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginTop:12 }}>
                    <button className="btn-ghost" style={{ height:36, fontSize:12, justifyContent:"center" }}>Foto</button>
                    <button className="btn-primary" style={{ height:36, fontSize:12 }}>Confirmar Entrega</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const RoteiroMot = () => (
  <div>
    <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Meu Roteiro</div>
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
      <KPI label="Saida" value="08:30" color={T.accent} icon="🕐" />
      <KPI label="Prev. Retorno" value="15:00" color={T.purple} icon="🏁" />
    </div>
    <div className="card fade-up-2">
      {[["Roteiro","225151"],["Rota","PRES PRUDENTE - ZONA SUL"],["Veiculo","VAN-ABC1234"],["Motorista","Pedro Lima"]].map(([k,v])=>(
        <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:`1px solid ${T.border}` }}>
          <span style={{ fontSize:13, color:T.textMuted }}>{k}</span>
          <span style={{ fontSize:13, fontWeight:600 }}>{v}</span>
        </div>
      ))}
    </div>
    <div className="card fade-up-3" style={{ marginTop:14 }}>
      <Progress value={1} max={4} color={T.green} label="Progresso das Entregas" />
    </div>
  </div>
);

// ============================================================
//  APP SHELL
// ============================================================
const AppShell = ({ user, onLogout }) => {
  const [pedidos, setPedidos] = useState(PEDIDOS_INICIAIS);
  const nav = NAV_MAP[user.role];
  const [screen, setScreen] = useState(nav[0].id);
  const roleColors = { comercial:T.accent, separador:T.purple, motorista:T.green, conferente:T.cyan };
  const roleColor = roleColors[user.role] || T.accent;

  const renderScreen = () => {
    const props = { user, pedidos, setPedidos, setScreen };
    switch(screen) {
      case "dashboard":   return <Dashboard {...props} />;
      case "novo_pedido": return <NovoPedido {...props} />;
      case "pedidos":     return <Pedidos {...props} />;
      case "faturamento": return <Faturamento />;
      case "clientes":    return <Clientes {...props} />;
      case "roteiros":    return <Roteiros />;
      case "produtos":    return <Produtos />;
      case "atividade":   return <Atividade />;
      case "separacao":   return <Separacao />;
      case "bipagem":     return <Bipagem />;
      case "historico":   return <Historico />;
      case "conferencia": return <Conferencia {...props} />;
      case "entregas":    return <Entregas />;
      case "roteiro":     return <RoteiroMot />;
      default:            return <Dashboard {...props} />;
    }
  };

  return (
    <div style={{ display:"flex", minHeight:"100vh" }}>
      <div className="sidebar-desktop" style={{ width:240, background:T.sidebar, display:"flex", flexDirection:"column", flexShrink:0, position:"sticky", top:0, height:"100vh" }}>
        <div style={{ padding:"24px 20px 20px", borderBottom:"1px solid rgba(255,255,255,.06)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:36, height:36, background:`linear-gradient(135deg,${T.accent},#60A5FA)`, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>📦</div>
            <div>
              <div className="condensed" style={{ fontSize:20, fontWeight:800, color:"#fff", letterSpacing:-.3 }}>DistribFacil</div>
              <div style={{ fontSize:10, color:"rgba(255,255,255,.3)", letterSpacing:1.5, textTransform:"uppercase" }}>Sistema</div>
            </div>
          </div>
        </div>
        <div style={{ padding:"16px 20px", borderBottom:"1px solid rgba(255,255,255,.06)", display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:36, height:36, borderRadius:10, background:roleColor, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:800, color:"#fff", flexShrink:0 }}>{user.avatar}</div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:13, fontWeight:700, color:"#fff", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{user.nome}</div>
            <div style={{ fontSize:11, color:roleColor, textTransform:"capitalize", fontWeight:600 }}>{user.role}</div>
          </div>
          <div style={{ width:8, height:8, borderRadius:"50%", background:T.green }} />
        </div>
        <div style={{ flex:1, padding:"12px", overflowY:"auto" }}>
          <div style={{ fontSize:10, color:"rgba(255,255,255,.2)", letterSpacing:2, textTransform:"uppercase", padding:"0 2px", marginBottom:8, marginTop:4 }}>MENU</div>
          {nav.map(n => (
            <button key={n.id} className={`sidebar-link ${screen===n.id?"active":""}`} onClick={()=>setScreen(n.id)}>
              <span style={{ fontSize:16 }}>{n.icon}</span><span>{n.label}</span>
              {n.id==="novo_pedido" && <span style={{ marginLeft:"auto", background:T.accent, color:"#fff", borderRadius:99, fontSize:10, padding:"2px 7px", fontWeight:700 }}>NOVO</span>}
            </button>
          ))}
        </div>
        <div style={{ padding:"12px 12px 20px", borderTop:"1px solid rgba(255,255,255,.06)" }}>
          <button className="sidebar-link" onClick={onLogout} style={{ color:"rgba(255,100,100,.7)" }}><span>🚪</span><span>Sair</span></button>
        </div>
      </div>

      <div style={{ flex:1, display:"flex", flexDirection:"column", minWidth:0 }}>
        <div style={{ background:T.white, borderBottom:`1.5px solid ${T.border}`, padding:"0 24px", height:60, display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0, position:"sticky", top:0, zIndex:10 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ fontSize:18 }}>{nav.find(n=>n.id===screen)?.icon}</span>
            <span style={{ fontSize:15, fontWeight:700 }}>{nav.find(n=>n.id===screen)?.label}</span>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:T.green }} />
            <span style={{ fontSize:12, color:T.green, fontWeight:600 }}>Online</span>
            <button onClick={onLogout} className="btn-ghost" style={{ height:36, fontSize:12 }}>Sair</button>
          </div>
        </div>
        <div style={{ flex:1, overflowY:"auto", padding:"28px 28px 100px" }}>
          <div key={screen}>{renderScreen()}</div>
        </div>
        <div className="bottom-nav" style={{ position:"fixed", bottom:0, left:0, right:0, background:T.white, borderTop:`1.5px solid ${T.border}`, padding:"6px 0", zIndex:50 }}>
          {nav.slice(0,5).map(n => (
            <button key={n.id} onClick={()=>setScreen(n.id)} style={{ flex:1, background:"none", border:"none", cursor:"pointer", padding:"8px 4px", display:"flex", flexDirection:"column", alignItems:"center", gap:3, color:screen===n.id?T.accent:T.textMuted, fontFamily:"'Barlow',sans-serif", position:"relative" }}>
              <span style={{ fontSize:20 }}>{n.icon}</span>
              <span style={{ fontSize:9, fontWeight:screen===n.id?700:500 }}>{n.label.split(" ")[0]}</span>
              {n.id==="novo_pedido" && <span style={{ position:"absolute", top:2, right:"50%", transform:"translateX(10px)", width:8, height:8, background:T.accent, borderRadius:"50%", border:`2px solid ${T.white}` }} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <style>{CSS}</style>
      {!user ? <Login onLogin={setUser} /> : <AppShell user={user} onLogout={()=>setUser(null)} />}
    </>
  );
}
