import { useState } from “react”;

const T = {
bg: “#F4F6FA”,
white: “#FFFFFF”,
surface: “#FFFFFF”,
card: “#FFFFFF”,
sidebar: “#0F1623”,
sidebarHover: “#1C2537”,
sidebarActive: “#2563EB”,
border: “#E5E9F0”,
borderDark: “#D1D8E4”,
text: “#0F1623”,
textSub: “#4B5563”,
textMuted: “#9CA3AF”,
accent: “#2563EB”,
accentLight: “#EEF3FF”,
green: “#10B981”,
greenLight: “#ECFDF5”,
amber: “#F59E0B”,
amberLight: “#FFFBEB”,
red: “#EF4444”,
redLight: “#FEF2F2”,
purple: “#8B5CF6”,
purpleLight: “#F5F3FF”,
cyan: “#06B6D4”,
cyanLight: “#ECFEFF”,
};

const GLOBAL_CSS = `@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap'); *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; } body { background: ${T.bg}; color: ${T.text}; font-family: 'Barlow', sans-serif; min-height: 100vh; -webkit-font-smoothing: antialiased; } button { font-family: 'Barlow', sans-serif; } input, select { font-family: 'Barlow', sans-serif; } ::-webkit-scrollbar { width: 5px; height: 5px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: ${T.borderDark}; border-radius: 10px; } .mono { font-family: 'IBM Plex Mono', monospace; } .condensed { font-family: 'Barlow Condensed', sans-serif; } @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } } @keyframes scaleIn { from { opacity: 0; transform: scale(.96); } to { opacity: 1; transform: scale(1); } } @keyframes scanPulse { 0%,100% { opacity: .6; transform: scaleX(1); } 50% { opacity: 1; transform: scaleX(1.02); } } @keyframes spin { to { transform: rotate(360deg); } } .fade-up { animation: fadeUp .35s cubic-bezier(.22,1,.36,1) both; } .fade-up-1 { animation: fadeUp .35s .05s cubic-bezier(.22,1,.36,1) both; } .fade-up-2 { animation: fadeUp .35s .1s cubic-bezier(.22,1,.36,1) both; } .fade-up-3 { animation: fadeUp .35s .15s cubic-bezier(.22,1,.36,1) both; } .fade-up-4 { animation: fadeUp .35s .2s cubic-bezier(.22,1,.36,1) both; } .scale-in { animation: scaleIn .3s cubic-bezier(.22,1,.36,1) both; } .spin { animation: spin .8s linear infinite; } .btn-primary { background: ${T.accent}; color: #fff; border: none; border-radius: 10px; padding: 0 24px; height: 46px; font-size: 14px; font-weight: 700; cursor: pointer; transition: all .15s; letter-spacing: .3px; display: flex; align-items: center; justify-content: center; gap: 8px; } .btn-primary:hover { background: #1D4ED8; transform: translateY(-1px); box-shadow: 0 8px 20px ${T.accent}40; } .btn-primary:active { transform: translateY(0); } .btn-ghost { background: transparent; color: ${T.textSub}; border: 1.5px solid ${T.border}; border-radius: 10px; padding: 0 20px; height: 40px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all .15s; display: flex; align-items: center; gap: 8px; } .btn-ghost:hover { border-color: ${T.accent}; color: ${T.accent}; background: ${T.accentLight}; } .card { background: ${T.white}; border: 1.5px solid ${T.border}; border-radius: 16px; padding: 20px; transition: box-shadow .2s, transform .15s; } .card:hover { box-shadow: 0 4px 20px rgba(0,0,0,.06); } .card-clickable { cursor: pointer; } .card-clickable:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.08); } .input-field { width: 100%; background: ${T.bg}; border: 1.5px solid ${T.border}; border-radius: 10px; padding: 0 14px; height: 46px; font-size: 14px; color: ${T.text}; outline: none; transition: border-color .15s, box-shadow .15s; } .input-field:focus { border-color: ${T.accent}; box-shadow: 0 0 0 3px ${T.accent}18; background: ${T.white}; } .input-field::placeholder { color: ${T.textMuted}; } .tab-bar { display: flex; gap: 4px; background: ${T.bg}; border-radius: 10px; padding: 4px; } .tab { flex: 1; padding: 8px; border: none; border-radius: 7px; cursor: pointer; font-size: 13px; font-weight: 600; transition: all .15s; background: transparent; color: ${T.textSub}; font-family: 'Barlow', sans-serif; } .tab.active { background: ${T.white}; color: ${T.accent}; box-shadow: 0 1px 6px rgba(0,0,0,.08); } .status-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; } .scan-line { height: 2px; background: linear-gradient(90deg, transparent, ${T.accent}, transparent); animation: scanPulse 2s ease-in-out infinite; border-radius: 2px; } .sidebar-link { display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-radius: 10px; cursor: pointer; transition: all .15s; border: none; background: transparent; color: rgba(255,255,255,.55); font-size: 13.5px; font-weight: 500; width: 100%; font-family: 'Barlow', sans-serif; text-align: left; } .sidebar-link:hover { background: ${T.sidebarHover}; color: rgba(255,255,255,.85); } .sidebar-link.active { background: ${T.sidebarActive}; color: #fff; font-weight: 700; box-shadow: 0 4px 14px ${T.accent}50; } .kpi-card { background: ${T.white}; border: 1.5px solid ${T.border}; border-radius: 16px; padding: 22px 20px; } .table-row { display: grid; padding: 12px 16px; border-radius: 10px; transition: background .12s; cursor: pointer; } .table-row:hover { background: ${T.bg}; } .progress-track { background: ${T.bg}; border-radius: 99px; height: 8px; overflow: hidden; } .progress-fill { height: 100%; border-radius: 99px; transition: width .6s cubic-bezier(.22,1,.36,1); } .badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 99px; font-size: 11px; font-weight: 700; letter-spacing: .4px; font-family: 'Barlow', sans-serif; } .login-bg { background: linear-gradient(135deg, #0F1623 0%, #1A2540 50%, #0F1623 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; } .login-grid { position: absolute; inset: 0; background-image: linear-gradient(${T.accent}12 1px, transparent 1px), linear-gradient(90deg, ${T.accent}12 1px, transparent 1px); background-size: 48px 48px; } @media (max-width: 768px) { .hide-mobile { display: none !important; } .sidebar-desktop { display: none !important; } .bottom-nav { display: flex !important; } } @media (min-width: 769px) { .bottom-nav { display: none !important; } }`;

const USERS = [
{ id: “U1”, nome: “Carlos Mendes”, login: “carlos”, senha: “1234”, role: “comercial”,  avatar: “CM” },
{ id: “U2”, nome: “Ana Souza”,     login: “ana”,    senha: “1234”, role: “separador”,  avatar: “AS” },
{ id: “U3”, nome: “Pedro Lima”,    login: “pedro”,  senha: “1234”, role: “motorista”,  avatar: “PL” },
{ id: “U4”, nome: “Joao Silva”,    login: “joao”,   senha: “1234”, role: “conferente”, avatar: “JS” },
];

const PRODUCTS = [
{ cod:“68635410”, nome:“SEDA SH CERAMIDAS 12X325ML”, ean:“7891150037397”, local:“A-01-001”, lote:“40”, val:“11/03/29”, est:144, un:“UN” },
{ cod:“10023451”, nome:“COCA COLA 2L PET C/6”,        ean:“7894900011518”, local:“B-02-003”, lote:“22”, val:“06/12/25”, est:360, un:“UN” },
{ cod:“20045678”, nome:“BISCOITO MAIZENA 400G”,        ean:“7622210651492”, local:“C-03-010”, lote:“15”, val:“03/08/26”, est:240, un:“UN” },
{ cod:“30056789”, nome:“LEITE INTEGRAL 1L CX”,         ean:“7896085801022”, local:“A-04-005”, lote:“08”, val:“15/11/25”, est:500, un:“UN” },
{ cod:“40067890”, nome:“AZEITE EXTRA VIRGEM 500ML”,    ean:“5601292000052”, local:“D-01-002”, lote:“33”, val:“20/05/27”, est:96,  un:“UN” },
{ cod:“50078901”, nome:“ARROZ BRANCO TIPO 1 5KG”,      ean:“7896006600897”, local:“E-02-007”, lote:“12”, val:“10/01/27”, est:180, un:“SC” },
{ cod:“60089012”, nome:“FEIJAO CARIOCA 1KG”,           ean:“7896005800245”, local:“E-02-008”, lote:“11”, val:“08/03/27”, est:300, un:“PC” },
{ cod:“70090123”, nome:“OLEO SOJA 900ML C/12”,         ean:“7896036095408”, local:“D-03-001”, lote:“29”, val:“14/09/26”, est:120, un:“UN” },
{ cod:“80001234”, nome:“GUARANA ANTARCTICA 2L”,        ean:“7891991010856”, local:“B-01-004”, lote:“41”, val:“02/10/25”, est:216, un:“UN” },
{ cod:“90012345”, nome:“SABAO EM PO OMO 1KG”,          ean:“7891024130416”, local:“F-01-003”, lote:“17”, val:“30/06/27”, est:144, un:“UN” },
{ cod:“11023456”, nome:“CREME DE LEITE 200G C/24”,     ean:“7896045105068”, local:“A-02-006”, lote:“38”, val:“11/04/26”, est:288, un:“UN” },
{ cod:“12034567”, nome:“MACARRAO ESPAGUETE 500G”,      ean:“7896020500077”, local:“C-04-002”, lote:“20”, val:“18/07/27”, est:480, un:“UN” },
];

const PEDIDOS = [
{ id:“PED-8821”, cliente:“Mercado Sao Joao”,    valor:4820.50, itens:14, status:“separando”,   data:“06/05/25”, vendedor:“Marcos” },
{ id:“PED-8820”, cliente:“Mini Box Central”,    valor:1290.00, itens:7,  status:“conferencia”, data:“06/05/25”, vendedor:“Luana”  },
{ id:“PED-8819”, cliente:“Atacarejo Boa Vida”,  valor:9670.80, itens:31, status:“em_rota”,     data:“05/05/25”, vendedor:“Marcos” },
{ id:“PED-8818”, cliente:“Padaria Pao de Mel”,  valor:890.30,  itens:5,  status:“entregue”,    data:“05/05/25”, vendedor:“Luana”  },
{ id:“PED-8817”, cliente:“Emporio da Familia”,  valor:2340.00, itens:11, status:“entregue”,    data:“04/05/25”, vendedor:“Tiago”  },
{ id:“PED-8816”, cliente:“Supermercado Modelo”, valor:7120.90, itens:28, status:“cancelado”,   data:“04/05/25”, vendedor:“Marcos” },
];

const ROTEIROS = [
{ id:“225151”, nome:“PRES PRUDENTE - ZONA SUL”, cliente_count:12, itens:48, peso:103.4, vol:0.16, status:“em_andamento”, motorista:“Pedro Lima”,   saida:“08:30”, prev:“15:00” },
{ id:“225152”, nome:“MARILIA - CENTRO”,          cliente_count:8,  itens:31, peso:72.1,  vol:0.09, status:“aguardando”,  motorista:“Adriano Costa”, saida:“10:00”, prev:“16:30” },
{ id:“225153”, nome:“ASSIS - BAIRROS”,           cliente_count:15, itens:62, peso:145.8, vol:0.21, status:“concluido”,   motorista:“Fernando Reis”, saida:“07:00”, prev:“14:00” },
];

const NOTAS = [
{ nf:“NF-004521”, cliente:“Mercado Sao Joao”,   valor:4820.50, emissao:“06/05/25”, venc:“20/05/25”, status:“aberta”  },
{ nf:“NF-004520”, cliente:“Atacarejo Boa Vida”, valor:9670.80, emissao:“05/05/25”, venc:“19/05/25”, status:“aberta”  },
{ nf:“NF-004519”, cliente:“Emporio da Familia”, valor:2340.00, emissao:“04/05/25”, venc:“18/05/25”, status:“paga”    },
{ nf:“NF-004518”, cliente:“Padaria Pao de Mel”, valor:890.30,  emissao:“03/05/25”, venc:“17/05/25”, status:“paga”    },
{ nf:“NF-004515”, cliente:“Mini Box Central”,   valor:1100.00, emissao:“28/04/25”, venc:“12/05/25”, status:“vencida” },
];

const ENTREGAS = [
{ idx:1, cliente:“Mercado Sao Joao”,    end:“Rua XV de Novembro, 340 - Centro”,  vol:12, peso:28.4, status:“entregue”,    hora:“09:15” },
{ idx:2, cliente:“Mini Box Central”,    end:“Av. Brasil, 1200 - Jd. America”,    vol:7,  peso:14.2, status:“em_andamento”,hora:“10:40” },
{ idx:3, cliente:“Atacarejo Boa Vida”,  end:“Rua Campos Salles, 85 - Bela Vista”,vol:23, peso:41.0, status:“aguardando”,  hora:”–”    },
{ idx:4, cliente:“Padaria Pao de Mel”,  end:“Rua da Paz, 22 - Sao Lucas”,        vol:5,  peso:8.1,  status:“aguardando”,  hora:”–”    },
];

const S_COLOR = { em_andamento:T.amber, em_rota:T.cyan, aguardando:T.accent, concluido:T.green, separando:T.purple, conferencia:T.cyan, entregue:T.green, cancelado:T.red, aberta:T.amber, paga:T.green, vencida:T.red };
const S_LABEL = { em_andamento:“Em Andamento”, em_rota:“Em Rota”, aguardando:“Aguardando”, concluido:“Concluido”, separando:“Separando”, conferencia:“Conferencia”, entregue:“Entregue”, cancelado:“Cancelado”, aberta:“Em Aberto”, paga:“Paga”, vencida:“Vencida” };
const sc = s => S_COLOR[s] || T.textMuted;
const sl = s => S_LABEL[s] || s;
const fmtR = v => “R$ “ + v.toLocaleString(“pt-BR”, { minimumFractionDigits:2 });
const pct = (a, b) => Math.round((a / b) * 100);

const Badge = ({ status, children }) => {
const c = sc(status);
const label = children || sl(status);
return (
<span className=“badge” style={{ background: c + “18”, color: c }}>
<span className=“status-dot” style={{ background: c }} />{label}
</span>
);
};

const KPI = ({ label, value, sub, color = T.accent, icon }) => (

  <div className="kpi-card fade-up">
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
      <div style={{ fontSize:12, color:T.textMuted, fontWeight:600, textTransform:"uppercase", letterSpacing:.5 }}>{label}</div>
      {icon && <div style={{ width:36, height:36, borderRadius:10, background:color+"15", display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }}>{icon}</div>}
    </div>
    <div className="condensed" style={{ fontSize:32, fontWeight:800, color, lineHeight:1 }}>{value}</div>
    {sub && <div style={{ fontSize:12, color:T.textMuted, marginTop:6 }}>{sub}</div>}
  </div>
);

const Progress = ({ value, max, color = T.accent, label }) => {
const p = pct(value, max);
return (
<div>
{label && (
<div style={{ display:“flex”, justifyContent:“space-between”, fontSize:12, color:T.textSub, marginBottom:6 }}>
<span>{label}</span><span style={{ color, fontWeight:700 }}>{p}%</span>
</div>
)}
<div className="progress-track">
<div className=“progress-fill” style={{ width:`${p}%`, background:color }} />
</div>
</div>
);
};

const Section = ({ title, action, children, delay=”” }) => (

  <div className={`fade-up${delay}`} style={{ marginBottom:24 }}>
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
      <div style={{ fontSize:14, fontWeight:700, color:T.text }}>{title}</div>
      {action && <button className="btn-ghost" style={{ height:32, fontSize:12 }} onClick={action.fn}>{action.label}</button>}
    </div>
    {children}
  </div>
);

/* ── LOGIN ── */
const Login = ({ onLogin }) => {
const [login, setLogin] = useState(””);
const [senha, setSenha] = useState(””);
const [err, setErr] = useState(””);
const [loading, setLoading] = useState(false);
const [showPass, setShowPass] = useState(false);

const handleLogin = () => {
if (!login || !senha) { setErr(“Preencha todos os campos.”); return; }
setLoading(true); setErr(””);
setTimeout(() => {
const u = USERS.find(u => u.login === login && u.senha === senha);
if (u) onLogin(u);
else { setErr(“Usuario ou senha incorretos.”); setLoading(false); }
}, 900);
};

const quickLogin = (u) => { setLogin(u.login); setSenha(u.senha); };

return (
<div className="login-bg">
<div className="login-grid" />
<div style={{ position:“absolute”, width:400, height:400, background:`radial-gradient(circle, ${T.accent}20 0%, transparent 70%)`, top:-100, right:-100, pointerEvents:“none” }} />
<div style={{ position:“absolute”, width:300, height:300, background:`radial-gradient(circle, ${T.green}15 0%, transparent 70%)`, bottom:-80, left:-80, pointerEvents:“none” }} />

```
  <div style={{ position:"relative", zIndex:1, width:"100%", maxWidth:420, padding:"0 20px" }}>
    <div className="fade-up" style={{ textAlign:"center", marginBottom:40 }}>
      <div style={{ display:"inline-flex", alignItems:"center", gap:10, marginBottom:10 }}>
        <div style={{ width:44, height:44, background:`linear-gradient(135deg, ${T.accent}, #60A5FA)`, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center" }}>
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
      <div style={{ fontSize:13, color:"rgba(255,255,255,.4)", marginBottom:28 }}>Acesse o sistema com suas credenciais</div>

      <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
        <div>
          <label style={{ fontSize:12, fontWeight:600, color:"rgba(255,255,255,.5)", display:"block", marginBottom:6, letterSpacing:.5 }}>USUARIO</label>
          <input className="input-field" value={login} onChange={e => setLogin(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            placeholder="Digite seu login"
            style={{ background:"rgba(255,255,255,.08)", border:"1.5px solid rgba(255,255,255,.12)", color:"#fff" }} />
        </div>
        <div>
          <label style={{ fontSize:12, fontWeight:600, color:"rgba(255,255,255,.5)", display:"block", marginBottom:6, letterSpacing:.5 }}>SENHA</label>
          <div style={{ position:"relative" }}>
            <input className="input-field" type={showPass ? "text" : "password"} value={senha} onChange={e => setSenha(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              placeholder="••••••••"
              style={{ background:"rgba(255,255,255,.08)", border:"1.5px solid rgba(255,255,255,.12)", color:"#fff", paddingRight:48 }} />
            <button onClick={() => setShowPass(!showPass)} style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", color:"rgba(255,255,255,.4)", cursor:"pointer", fontSize:16 }}>
              {showPass ? "🙈" : "👁"}
            </button>
          </div>
        </div>
        {err && <div style={{ background:"#EF444420", border:"1px solid #EF444440", borderRadius:8, padding:"10px 14px", fontSize:13, color:"#FCA5A5" }}>⚠ {err}</div>}
        {/* CORRIGIDO: opacity:loading ? 0.85 : 1  (era loading?.85:1) */}
        <button className="btn-primary" onClick={handleLogin} disabled={loading} style={{ height:50, fontSize:15, marginTop:4, opacity: loading ? 0.85 : 1 }}>
          {loading
            ? <span className="spin" style={{ display:"inline-block", width:18, height:18, border:"2.5px solid #fff4", borderTopColor:"#fff", borderRadius:"50%" }} />
            : "Entrar no Sistema →"}
        </button>
      </div>
    </div>

    <div className="fade-up-2" style={{ marginTop:24 }}>
      <div style={{ fontSize:11, color:"rgba(255,255,255,.3)", textAlign:"center", marginBottom:12, letterSpacing:1 }}>ACESSO RAPIDO (DEMO)</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
        {USERS.map(u => (
          <button key={u.id} onClick={() => quickLogin(u)} style={{
            background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.08)", borderRadius:10, padding:"10px 12px",
            color:"rgba(255,255,255,.6)", cursor:"pointer", textAlign:"left", transition:"all .15s", fontFamily:"'Barlow',sans-serif"
          }}
            onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,.1)"; e.currentTarget.style.color="#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,.05)"; e.currentTarget.style.color="rgba(255,255,255,.6)"; }}
          >
            <div style={{ fontSize:12, fontWeight:700 }}>{u.nome}</div>
            <div style={{ fontSize:11, opacity:.6, marginTop:2, textTransform:"capitalize" }}>{u.role}</div>
          </button>
        ))}
      </div>
    </div>
  </div>
</div>
```

);
};

/* ── NAV CONFIG ── */
const NAV_MAP = {
comercial:  [
{ id:“dashboard”,   label:“Dashboard”,   icon:“📊” },
{ id:“pedidos”,     label:“Pedidos”,     icon:“📋” },
{ id:“faturamento”, label:“Faturamento”, icon:“💰” },
{ id:“roteiros”,    label:“Roteiros”,    icon:“🗺” },
{ id:“produtos”,    label:“Produtos”,    icon:“🗃” },
],
separador: [
{ id:“atividade”,   label:“Atividade”,   icon:“⚡” },
{ id:“separacao”,   label:“Separacao”,   icon:“📦” },
{ id:“bipagem”,     label:“Consulta”,    icon:“🔍” },
{ id:“historico”,   label:“Historico”,   icon:“🕒” },
{ id:“produtos”,    label:“Produtos”,    icon:“🗃” },
],
conferente: [
{ id:“conferencia”, label:“Conferencia”, icon:“✅” },
{ id:“bipagem”,     label:“Consulta”,    icon:“🔍” },
{ id:“historico”,   label:“Historico”,   icon:“🕒” },
{ id:“produtos”,    label:“Produtos”,    icon:“🗃” },
],
motorista:  [
{ id:“entregas”,    label:“Entregas”,    icon:“📍” },
{ id:“roteiro”,     label:“Roteiro”,     icon:“🗺” },
{ id:“historico”,   label:“Historico”,   icon:“🕒” },
],
};

/* ── SCREENS COMERCIAL ── */
const Dashboard = () => {
const faturado = PEDIDOS.filter(p => p.status === “entregue”).reduce((a,p) => a + p.valor, 0);
const emAberto = PEDIDOS.filter(p => ![“entregue”,“cancelado”].includes(p.status)).reduce((a,p) => a + p.valor, 0);
return (
<div>
<div style={{ marginBottom:24 }}>
<div className=“fade-up condensed” style={{ fontSize:26, fontWeight:800, color:T.text }}>Dashboard Comercial</div>
<div className=“fade-up-1” style={{ fontSize:13, color:T.textMuted }}>Visao geral do dia — 06/05/2025</div>
</div>
<div style={{ display:“grid”, gridTemplateColumns:“repeat(auto-fill,minmax(200px,1fr))”, gap:14, marginBottom:24 }}>
<KPI label="Faturamento Hoje" value={fmtR(faturado)} sub="vs R$12k ontem" color={T.green} icon="💰" />
<KPI label="Em Aberto"        value={fmtR(emAberto)} sub="4 pedidos ativos" color={T.amber} icon="⏳" />
<KPI label="Pedidos Hoje"     value="6"  sub="2 cancelados"         color={T.accent} icon="📋" />
<KPI label="Clientes"         value="35" sub="+8% vs semana ant."   color={T.purple} icon="🏪" />
</div>

```
  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:24 }}>
    <Section title="Status dos Roteiros" delay="-2">
      <div className="card" style={{ padding:"16px 20px", display:"flex", flexDirection:"column", gap:16 }}>
        {ROTEIROS.map(r => (
          <div key={r.id}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
              <div>
                <div style={{ fontSize:13, fontWeight:600 }}>{r.nome}</div>
                <div style={{ fontSize:11, color:T.textMuted }}>{r.motorista}</div>
              </div>
              <Badge status={r.status} />
            </div>
            <Progress value={r.status==="concluido"?r.itens:r.status==="em_andamento"?32:0} max={r.itens} color={sc(r.status)} />
          </div>
        ))}
      </div>
    </Section>

    <Section title="Ultimos Pedidos" delay="-3">
      <div className="card" style={{ padding:"8px 0" }}>
        {PEDIDOS.slice(0,5).map(p => (
          <div key={p.id} className="table-row" style={{ gridTemplateColumns:"1fr auto" }}>
            <div>
              <div style={{ fontSize:13, fontWeight:600 }}>{p.cliente}</div>
              <div style={{ fontSize:11, color:T.textMuted }}>{p.id} · {p.vendedor}</div>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:13, fontWeight:700, color:T.green }}>{fmtR(p.valor)}</div>
              <Badge status={p.status} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  </div>

  <Section title="Notas Fiscais Recentes" delay="-4">
    <div className="card" style={{ padding:0, overflow:"hidden" }}>
      <div style={{ display:"grid", gridTemplateColumns:"1.5fr 1fr 1fr 1fr 1fr", padding:"10px 16px", background:T.bg, fontSize:11, fontWeight:700, color:T.textMuted, letterSpacing:.5, textTransform:"uppercase" }}>
        <span>NF / Cliente</span><span>Emissao</span><span>Vencimento</span><span style={{textAlign:"right"}}>Valor</span><span style={{textAlign:"right"}}>Status</span>
      </div>
      {NOTAS.map((n,i) => (
        <div key={n.nf} className="table-row" style={{ gridTemplateColumns:"1.5fr 1fr 1fr 1fr 1fr", borderTop: i>0?`1px solid ${T.border}`:"none", borderRadius:0 }}>
          <div><div style={{fontSize:13,fontWeight:600}}>{n.nf}</div><div style={{fontSize:11,color:T.textMuted}}>{n.cliente}</div></div>
          <div style={{fontSize:13,color:T.textSub,alignSelf:"center"}}>{n.emissao}</div>
          <div style={{fontSize:13,color:T.textSub,alignSelf:"center"}}>{n.venc}</div>
          <div style={{fontSize:13,fontWeight:700,alignSelf:"center",textAlign:"right"}}>{fmtR(n.valor)}</div>
          <div style={{alignSelf:"center",textAlign:"right"}}><Badge status={n.status} /></div>
        </div>
      ))}
    </div>
  </Section>
</div>
```

);
};

const Pedidos = () => {
const [tab, setTab] = useState(“todos”);
const tabs = [[“todos”,“Todos”],[“separando”,“Separando”],[“em_rota”,“Em Rota”],[“entregue”,“Entregue”]];
const filtered = tab === “todos” ? PEDIDOS : PEDIDOS.filter(p => p.status === tab);
return (
<div>
<div className=“fade-up condensed” style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Pedidos</div>
<div className=“fade-up-1” style={{ fontSize:13, color:T.textMuted, marginBottom:20 }}>{PEDIDOS.length} pedidos hoje</div>
<div className=“fade-up-1 tab-bar” style={{ marginBottom:20 }}>
{tabs.map(([id,label]) => <button key={id} className={`tab ${tab===id?"active":""}`} onClick={()=>setTab(id)}>{label}</button>)}
</div>
<div className=“fade-up-2” style={{ display:“flex”, flexDirection:“column”, gap:10 }}>
{filtered.map(p => (
<div key={p.id} className=“card card-clickable” style={{ display:“grid”, gridTemplateColumns:“1fr auto”, gap:16, padding:“16px 20px”, borderLeft:`4px solid ${sc(p.status)}` }}>
<div>
<div style={{ display:“flex”, alignItems:“center”, gap:10, marginBottom:4 }}>
<span style={{ fontSize:15, fontWeight:700 }}>{p.cliente}</span>
<Badge status={p.status} />
</div>
<div style={{ fontSize:12, color:T.textMuted }}>{p.id} · {p.itens} itens · Vendedor: {p.vendedor} · {p.data}</div>
</div>
<div style={{ textAlign:“right”, display:“flex”, flexDirection:“column”, justifyContent:“center” }}>
<div className=“condensed” style={{ fontSize:22, fontWeight:800, color:T.green }}>{fmtR(p.valor)}</div>
</div>
</div>
))}
</div>
</div>
);
};

const Faturamento = () => {
const total   = NOTAS.reduce((a,n) => a+n.valor, 0);
const pagas   = NOTAS.filter(n=>n.status===“paga”).reduce((a,n) => a+n.valor, 0);
const abertas = NOTAS.filter(n=>n.status===“aberta”).reduce((a,n) => a+n.valor, 0);
const vencidas= NOTAS.filter(n=>n.status===“vencida”).reduce((a,n) => a+n.valor, 0);
return (
<div>
<div className=“fade-up condensed” style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Faturamento</div>
<div className=“fade-up-1” style={{ fontSize:13, color:T.textMuted, marginBottom:20 }}>Notas Fiscais · Maio 2025</div>
<div style={{ display:“grid”, gridTemplateColumns:“repeat(auto-fill,minmax(180px,1fr))”, gap:14, marginBottom:24 }}>
<KPI label="Total Emitido" value={fmtR(total)}   color={T.accent} icon="📄" />
<KPI label=“Recebido”      value={fmtR(pagas)}   color={T.green}  icon=“✅” sub={`${NOTAS.filter(n=>n.status==="paga").length} notas`} />
<KPI label=“Em Aberto”     value={fmtR(abertas)} color={T.amber}  icon=“⏳” sub={`${NOTAS.filter(n=>n.status==="aberta").length} notas`} />
<KPI label=“Vencido”       value={fmtR(vencidas)}color={T.red}    icon=“⚠” sub=“Cobranca necessaria” />
</div>
<div className="fade-up-2">
<Progress value={pagas} max={total} color={T.green} label="Taxa de Recebimento" />
<div style={{ height:12 }} />
</div>
<Section title="Notas Fiscais" delay="-3">
<div className=“card” style={{ padding:0, overflow:“hidden” }}>
<div style={{ display:“grid”, gridTemplateColumns:“2fr 1fr 1fr 1fr 1fr”, padding:“10px 20px”, background:T.bg, fontSize:11, fontWeight:700, color:T.textMuted, letterSpacing:.4, textTransform:“uppercase” }}>
<span>Cliente</span><span>NF</span><span>Emissao</span><span style={{textAlign:“right”}}>Valor</span><span style={{textAlign:“right”}}>Situacao</span>
</div>
{NOTAS.map((n,i) => (
<div key={n.nf} className=“table-row” style={{ gridTemplateColumns:“2fr 1fr 1fr 1fr 1fr”, borderTop:`1px solid ${T.border}`, borderRadius:0, padding:“14px 20px” }}>
<div style={{fontSize:13,fontWeight:600,alignSelf:“center”}}>{n.cliente}</div>
<div style={{fontSize:13,fontFamily:“monospace”,color:T.accent,alignSelf:“center”}}>{n.nf}</div>
<div style={{fontSize:13,color:T.textSub,alignSelf:“center”}}>{n.emissao}</div>
<div style={{fontSize:14,fontWeight:700,alignSelf:“center”,textAlign:“right”}}>{fmtR(n.valor)}</div>
<div style={{alignSelf:“center”,textAlign:“right”}}><Badge status={n.status} /></div>
</div>
))}
</div>
</Section>
</div>
);
};

const Roteiros = () => (

  <div>
    <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Roteiros</div>
    <div className="fade-up-1" style={{ fontSize:13, color:T.textMuted, marginBottom:20 }}>Controle de rotas de entrega</div>
    <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
      {ROTEIROS.map((r,i) => (
        <div key={r.id} className="card card-clickable fade-up" style={{ animationDelay:`${i*.05}s`, borderLeft:`4px solid ${sc(r.status)}` }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:16, marginBottom:16 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
                <span className="mono" style={{ fontSize:12, color:T.accent }}>{r.id}</span>
                <Badge status={r.status} />
              </div>
              <div style={{ fontSize:16, fontWeight:700 }}>{r.nome}</div>
              <div style={{ fontSize:12, color:T.textMuted, marginTop:2 }}>🚚 {r.motorista} · Saida: {r.saida} · Prev: {r.prev}</div>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, marginBottom:16 }}>
            {[["Clientes",r.cliente_count,T.accent],["Itens",r.itens,T.purple],["Peso",`${r.peso}kg`,T.amber],["Volume",`${r.vol}m3`,T.cyan]].map(([l,v,c])=>(
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
  </div>
);

/* ── SCREENS SEPARADOR ── */
const Atividade = () => (

  <div>
    <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Atividade Ativa</div>
    <div className="fade-up-1" style={{ display:"flex", gap:8, marginBottom:20 }}>
      <Badge status="em_andamento" /><span className="mono" style={{ fontSize:12, color:T.textMuted }}>#3885467</span>
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
      <KPI label="Roteiro"   value="225151" color={T.accent} icon="🗺" />
      <KPI label="Progresso" value="32/48"  sub="66% concluido" color={T.green} icon="📦" />
    </div>
    <div className="card fade-up-2" style={{ marginBottom:14 }}>
      <div style={{ fontSize:12, fontWeight:700, color:T.textMuted, marginBottom:14, letterSpacing:.5, textTransform:"uppercase" }}>Distribuicao por Rua</div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8 }}>
        {["A","B","C","D","E","F"].map(r => {
          const active = ["A","B"].includes(r);
          return (
            <div key={r} style={{ borderRadius:10, padding:"14px 0", textAlign:"center", background:active?T.accentLight:T.bg, border:`1.5px solid ${active?T.accent:T.border}` }}>
              <div className="condensed" style={{ fontSize:20, fontWeight:800, color:active?T.accent:T.textMuted }}>RUA {r}</div>
              <div style={{ fontSize:11, color:active?T.accent:T.textMuted }}>{active?"Pendente":"Livre"}</div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="card fade-up-3" style={{ marginBottom:14 }}>
      <Progress value={32} max={48} color={T.green} label="Itens Separados" />
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14, marginTop:16 }}>
        {[["Peso","103.5 kg",T.accent],["Volume","0.16 m3",T.purple],["Clientes","12",T.green]].map(([l,v,c])=>(
          <div key={l} style={{ textAlign:"center" }}>
            <div className="condensed" style={{ fontSize:22, fontWeight:800, color:c }}>{v}</div>
            <div style={{ fontSize:11, color:T.textMuted }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="fade-up-4" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
      <button className="btn-ghost">Suspender</button>
      <button className="btn-primary">Continuar</button>
    </div>
  </div>
);

const Separacao = () => {
const [qty, setQty] = useState(1);
const [scanned, setScanned] = useState(0);
const [input, setInput] = useState(””);
const [flash, setFlash] = useState(false);
const prod = PRODUCTS[0];

const confirm = () => {
if (!input.trim()) return;
setFlash(true); setScanned(s => s + qty); setInput(””);
setTimeout(() => setFlash(false), 500);
};

return (
<div>
<div className=“fade-up condensed” style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Separacao</div>
<div className=“fade-up-1” style={{ fontSize:13, color:T.textMuted, marginBottom:20 }}>Roteiro 225151 · BAU_PRES PRUDENTE</div>

```
  <div className="card fade-up-1" style={{ marginBottom:14, borderLeft:`4px solid ${flash ? T.green : T.accent}`, transition:"border-color .3s" }}>
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
      <div>
        <div className="mono" style={{ fontSize:11, color:T.textMuted, marginBottom:4 }}>{prod.cod}</div>
        <div style={{ fontSize:15, fontWeight:700 }}>{prod.nome}</div>
      </div>
      <Badge status="em_andamento">Pendente</Badge>
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:14 }}>
      <div style={{ background:T.bg, borderRadius:8, padding:"10px 12px" }}>
        <div style={{ fontSize:11, color:T.textMuted }}>Lote</div>
        <div className="mono" style={{ fontSize:14, fontWeight:600 }}>No {prod.lote}</div>
      </div>
      <div style={{ background:T.bg, borderRadius:8, padding:"10px 12px" }}>
        <div style={{ fontSize:11, color:T.textMuted }}>Validade</div>
        <div className="mono" style={{ fontSize:14, fontWeight:600 }}>{prod.val}</div>
      </div>
    </div>
    <div style={{ background:scanned>=6?T.greenLight:T.amberLight, border:`1.5px solid ${scanned>=6?T.green:T.amber}`, borderRadius:10, padding:"14px", textAlign:"center", marginBottom:14 }}>
      <div className="condensed" style={{ fontSize:28, fontWeight:900, color:scanned>=6?T.green:T.amber }}>SEPARAR 6 UN</div>
    </div>
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
      <div style={{ textAlign:"center" }}>
        <div className="condensed" style={{ fontSize:32, fontWeight:900, color:scanned>0?T.green:T.textMuted }}>{scanned}</div>
        <div style={{ fontSize:11, color:T.textMuted }}>SEPARADO</div>
      </div>
      <div style={{ textAlign:"center" }}>
        <div className="condensed" style={{ fontSize:32, fontWeight:900, color:T.textMuted }}>0</div>
        <div style={{ fontSize:11, color:T.textMuted }}>FRACIONADO</div>
      </div>
    </div>
  </div>

  <div className="card fade-up-2" style={{ marginBottom:14 }}>
    <div className="scan-line" style={{ marginBottom:12 }} />
    <div style={{ fontSize:11, color:T.textMuted, marginBottom:6 }}>EAN / COD. BARRAS</div>
    <div className="mono" style={{ fontSize:13, color:T.accent, marginBottom:12 }}>{prod.ean}</div>
    <input className="input-field" value={input} onChange={e=>setInput(e.target.value)}
      onKeyDown={e=>e.key==="Enter"&&confirm()}
      placeholder="Bipe ou digite o codigo..." />
    <div style={{ display:"flex", gap:8, marginTop:12, alignItems:"center" }}>
      <button onClick={()=>setQty(q=>Math.max(1,q-1))} style={{ width:42, height:42, borderRadius:10, background:T.bg, border:`1.5px solid ${T.border}`, fontSize:20, cursor:"pointer", fontWeight:700 }}>-</button>
      <div style={{ flex:1, textAlign:"center", fontWeight:700, fontSize:16 }}>Qtd: {qty}</div>
      <button onClick={()=>setQty(q=>q+1)} style={{ width:42, height:42, borderRadius:10, background:T.bg, border:`1.5px solid ${T.border}`, fontSize:20, cursor:"pointer", fontWeight:700 }}>+</button>
      <button className="btn-primary" onClick={confirm} style={{ flex:2 }}>Confirmar</button>
    </div>
  </div>

  <div className="fade-up-3" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8 }}>
    {["Pular Item","Encerrar Item","Trocar Lote"].map(a=>(
      <button key={a} className="btn-ghost" style={{ height:38, fontSize:12, justifyContent:"center" }}>{a}</button>
    ))}
  </div>
</div>
```

);
};

const Bipagem = () => {
const [q, setQ] = useState(””);
const [res, setRes] = useState(null);
const [loading, setLoading] = useState(false);
const [miss, setMiss] = useState(false);

const search = (term) => {
const t = (term || q).trim().toLowerCase();
if (!t) return;
setLoading(true); setRes(null); setMiss(false);
setTimeout(() => {
const found = PRODUCTS.find(p =>
p.ean===t || p.cod===t || p.nome.toLowerCase().includes(t) || p.local.toLowerCase()===t
);
setLoading(false);
if (found) setRes(found); else setMiss(true);
}, 700);
};

return (
<div>
<div className=“fade-up condensed” style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Consulta de Estoque</div>
<div className=“fade-up-1” style={{ fontSize:13, color:T.textMuted, marginBottom:20 }}>Bipe ou pesquise por EAN, codigo, nome ou local</div>
<div className=“card fade-up-1” style={{ marginBottom:16 }}>
<div className=“scan-line” style={{ marginBottom:14 }} />
<div style={{ display:“flex”, gap:10 }}>
<input className=“input-field” value={q} onChange={e=>setQ(e.target.value)}
onKeyDown={e=>e.key===“Enter”&&search()} placeholder=“EAN, codigo, nome, local…” />
<button className=“btn-primary” onClick={()=>search()} style={{ width:56, padding:0 }}>🔍</button>
</div>
</div>
{loading && (
<div style={{ textAlign:“center”, padding:“32px 0” }}>
<div className=“spin” style={{ width:32, height:32, border:`3px solid ${T.border}`, borderTopColor:T.accent, borderRadius:“50%”, margin:“0 auto 12px” }} />
<div style={{ fontSize:13, color:T.textMuted }}>Buscando no estoque…</div>
</div>
)}
{miss && (
<div className=“card scale-in” style={{ borderColor:T.red, borderLeftWidth:4, marginBottom:16, textAlign:“center”, padding:24 }}>
<div style={{ fontSize:32, marginBottom:8 }}>🔍</div>
<div style={{ fontWeight:700, color:T.red }}>Produto nao encontrado</div>
<div style={{ fontSize:13, color:T.textMuted, marginTop:4 }}>Verifique o codigo EAN ou nome informado</div>
</div>
)}
{res && (
<div className=“card scale-in” style={{ borderColor:T.green, borderLeftWidth:4, marginBottom:16 }}>
<div style={{ display:“flex”, justifyContent:“space-between”, marginBottom:12 }}>
<Badge status="entregue">Encontrado</Badge>
<span className=“mono” style={{ fontSize:11, color:T.textMuted }}>{res.cod}</span>
</div>
<div style={{ fontSize:16, fontWeight:700, marginBottom:4 }}>{res.nome}</div>
<div className=“mono” style={{ fontSize:13, color:T.accent, marginBottom:16 }}>{res.ean}</div>
<div style={{ display:“grid”, gridTemplateColumns:“1fr 1fr”, gap:10 }}>
{[[“Local”,res.local,T.accent],[“Estoque”,`${res.est} ${res.un}`,T.green],[“Lote”,res.lote,T.text],[“Validade”,res.val,T.text]].map(([k,v,c])=>(
<div key={k} style={{ background:T.bg, borderRadius:8, padding:“10px 12px” }}>
<div style={{ fontSize:11, color:T.textMuted }}>{k}</div>
<div className=“mono” style={{ fontSize:14, fontWeight:700, color:c, marginTop:2 }}>{v}</div>
</div>
))}
</div>
</div>
)}
<div style={{ fontSize:12, fontWeight:700, color:T.textMuted, marginBottom:10, letterSpacing:.4, textTransform:“uppercase” }}>Acesso Rapido</div>
{PRODUCTS.slice(0,5).map(p => (
<div key={p.cod} className=“card card-clickable” onClick={()=>{setQ(p.ean);search(p.ean);}}
style={{ display:“flex”, justifyContent:“space-between”, alignItems:“center”, padding:“12px 16px”, marginBottom:8 }}>
<div>
<div style={{ fontSize:13, fontWeight:600 }}>{p.nome}</div>
<div className=“mono” style={{ fontSize:11, color:T.textMuted }}>{p.ean}</div>
</div>
<div style={{ textAlign:“right” }}>
<div className=“mono” style={{ fontSize:12, color:T.accent, fontWeight:600 }}>{p.local}</div>
<div style={{ fontSize:12, color:T.green, fontWeight:600 }}>{p.est} un</div>
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
      { id:"3885467", rot:"225151", op:"OP416", ini:"11:42", fim:"--", status:"em_andamento", sep:32, tot:48 },
      { id:"3885460", rot:"225148", op:"OP412", ini:"09:15", fim:"14:30", status:"concluido",   sep:41, tot:41 },
      { id:"3885455", rot:"225145", op:"OP408", ini:"08:00", fim:"12:45", status:"concluido",   sep:28, tot:28 },
    ].map((a,i) => (
      <div key={a.id} className="card card-clickable fade-up" style={{ animationDelay:`${i*.05}s`, marginBottom:10, borderLeft:`4px solid ${sc(a.status)}` }}>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:12 }}>
          <div>
            <span className="mono" style={{ fontSize:12, color:T.accent }}>#{a.id}</span>
            <div style={{ fontSize:13, fontWeight:600, marginTop:2 }}>Roteiro {a.rot} · {a.op}</div>
          </div>
          <Badge status={a.status} />
        </div>
        <Progress value={a.sep} max={a.tot} color={sc(a.status)} label={`${a.sep}/${a.tot} itens`} />
        <div style={{ display:"flex", gap:16, marginTop:10, fontSize:12, color:T.textMuted }}>
          <span>Inicio: {a.ini}</span>
          {a.fim !== "--" && <span>Fim: {a.fim}</span>}
        </div>
      </div>
    ))}
  </div>
);

const Produtos = () => {
const [q, setQ] = useState(””);
const filtered = PRODUCTS.filter(p => !q
|| p.nome.toLowerCase().includes(q.toLowerCase())
|| p.ean.includes(q)
|| p.cod.includes(q)
|| p.local.toLowerCase().includes(q.toLowerCase())
);
return (
<div>
<div className=“fade-up condensed” style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Produtos</div>
<div className=“fade-up-1” style={{ fontSize:13, color:T.textMuted, marginBottom:16 }}>{PRODUCTS.length} produtos cadastrados</div>
<input className=“input-field fade-up-1” value={q} onChange={e=>setQ(e.target.value)} placeholder=“Filtrar por nome, EAN, codigo ou local…” style={{ marginBottom:16 }} />
<div style={{ fontSize:12, color:T.textMuted, marginBottom:10 }}>{filtered.length} resultado(s)</div>
{filtered.map((p,i) => (
<div key={p.cod} className=“card card-clickable fade-up” style={{ animationDelay:`${i*.03}s`, marginBottom:10 }}>
<div style={{ display:“flex”, justifyContent:“space-between”, alignItems:“flex-start” }}>
<div style={{ flex:1 }}>
<div style={{ fontWeight:700, fontSize:14, marginBottom:6 }}>{p.nome}</div>
<div className=“mono” style={{ fontSize:12, color:T.accent, marginBottom:8 }}>{p.ean}</div>
<div style={{ display:“flex”, gap:6, flexWrap:“wrap” }}>
<span className=“badge” style={{ background:T.accentLight, color:T.accent }}>📍 {p.local}</span>
<span className=“badge” style={{ background:T.bg, color:T.textSub }}>Lote {p.lote}</span>
<span className=“badge” style={{ background:T.greenLight, color:T.green }}>{p.est} {p.un}</span>
</div>
</div>
<div style={{ textAlign:“right”, marginLeft:12 }}>
<div className=“mono” style={{ fontSize:11, color:T.textMuted }}>{p.cod}</div>
<div style={{ fontSize:12, color:T.textMuted, marginTop:4 }}>Val: {p.val}</div>
</div>
</div>
</div>
))}
</div>
);
};

const Conferencia = () => {
const [checked, setChecked] = useState({});
const items = PRODUCTS.slice(0, 7);
const done = Object.values(checked).filter(Boolean).length;
return (
<div>
<div className=“fade-up condensed” style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Conferencia</div>
<div className=“fade-up-1” style={{ fontSize:13, color:T.textMuted, marginBottom:16 }}>Pedido PED-8821 · Mercado Sao Joao</div>
<div className=“card fade-up-1” style={{ marginBottom:16 }}>
<Progress value={done} max={items.length} color={done===items.length?T.green:T.accent}
label={done===items.length ? “Conferencia completa!” : `${items.length-done} item(s) pendentes`} />
</div>
{items.map((p,i) => (
// CORRIGIDO: {…c}  (era {…c} com caracter unicode)
<div key={p.cod} onClick={()=>setChecked(c=>({…c,[p.cod]:!c[p.cod]}))}
className=“card card-clickable fade-up”
style={{ animationDelay:`${i*.04}s`, marginBottom:8, display:“flex”, alignItems:“center”, gap:12,
background:checked[p.cod]?T.greenLight:T.white, borderColor:checked[p.cod]?T.green:T.border }}>
<div style={{ width:26, height:26, borderRadius:8, background:checked[p.cod]?T.green:T.bg,
border:`2px solid ${checked[p.cod]?T.green:T.border}`, display:“flex”, alignItems:“center”,
justifyContent:“center”, flexShrink:0, transition:“all .15s” }}>
{checked[p.cod] && <span style={{ color:”#fff”, fontSize:14, fontWeight:900 }}>✓</span>}
</div>
<div style={{ flex:1 }}>
<div style={{ fontSize:13, fontWeight:checked[p.cod]?400:600, color:checked[p.cod]?T.textMuted:T.text }}>{p.nome}</div>
<div style={{ fontSize:11, color:T.textMuted }}>{p.local} · {p.est} un</div>
</div>
{checked[p.cod] && <span style={{ color:T.green, fontSize:13, fontWeight:700 }}>OK</span>}
</div>
))}
</div>
);
};

/* ── SCREENS MOTORISTA ── */
const Entregas = () => {
const [sel, setSel] = useState(null);
const entregues = ENTREGAS.filter(e=>e.status===“entregue”).length;
return (
<div>
<div className=“fade-up condensed” style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Minhas Entregas</div>
<div className=“fade-up-1” style={{ fontSize:13, color:T.textMuted, marginBottom:16 }}>Roteiro 225151 · PRES PRUDENTE - ZONA SUL</div>
<div style={{ display:“grid”, gridTemplateColumns:“1fr 1fr 1fr”, gap:10, marginBottom:16 }}>
<KPI label="Paradas"   value={ENTREGAS.length} icon="📍" />
<KPI label="Entregues" value={entregues} color={T.green} icon="✅" />
<KPI label="Pendentes" value={ENTREGAS.length-entregues} color={T.amber} icon="⏳" />
</div>
<div style={{ display:“flex”, flexDirection:“column”, gap:10 }}>
{ENTREGAS.map((e,i) => (
<div key={e.idx} className=“card card-clickable fade-up”
style={{ animationDelay:`${i*.05}s`, borderLeft:`4px solid ${sc(e.status)}`, background:sel===e.idx?T.bg:T.white }}
onClick={()=>setSel(sel===e.idx?null:e.idx)}>
<div style={{ display:“flex”, gap:14, alignItems:“flex-start” }}>
<div style={{ width:34, height:34, borderRadius:10, background:sc(e.status)+“18”, border:`2px solid ${sc(e.status)}`, display:“flex”, alignItems:“center”, justifyContent:“center”, flexShrink:0 }}>
<span className=“condensed” style={{ fontSize:16, fontWeight:900, color:sc(e.status) }}>{e.idx}</span>
</div>
<div style={{ flex:1 }}>
<div style={{ display:“flex”, justifyContent:“space-between”, alignItems:“flex-start” }}>
<div>
<div style={{ fontSize:14, fontWeight:700 }}>{e.cliente}</div>
<div style={{ fontSize:12, color:T.textMuted, marginTop:2 }}>{e.end}</div>
</div>
<Badge status={e.status} />
</div>
{sel===e.idx && (
<div style={{ marginTop:12, display:“grid”, gridTemplateColumns:“1fr 1fr 1fr”, gap:8 }}>
{[[“Volumes”,e.vol,T.accent],[“Peso”,`${e.peso}kg`,T.purple],[“Hora”,e.hora,T.green]].map(([l,v,c])=>(
<div key={l} style={{ background:T.bg, borderRadius:8, padding:“8px 10px”, textAlign:“center” }}>
<div className=“condensed” style={{ fontSize:18, fontWeight:800, color:c }}>{v}</div>
<div style={{ fontSize:10, color:T.textMuted }}>{l}</div>
</div>
))}
</div>
)}
{sel===e.idx && e.status!==“entregue” && (
<div style={{ display:“grid”, gridTemplateColumns:“1fr 1fr”, gap:8, marginTop:12 }}>
<button className=“btn-ghost” style={{ height:36, fontSize:12, justifyContent:“center” }}>📷 Foto</button>
<button className=“btn-primary” style={{ height:36, fontSize:12 }}>Confirmar Entrega</button>
</div>
)}
</div>
</div>
</div>
))}
</div>
</div>
);
};

const RoteiroMot = () => (

  <div>
    <div className="fade-up condensed" style={{ fontSize:26, fontWeight:800, marginBottom:6 }}>Meu Roteiro</div>
    <div className="fade-up-1" style={{ fontSize:13, color:T.textMuted, marginBottom:20 }}>Detalhes do roteiro do dia</div>
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
      <KPI label="Saida"         value="08:30" color={T.accent} icon="🕐" />
      <KPI label="Prev. Retorno" value="15:00" color={T.purple} icon="🏁" />
    </div>
    <div className="card fade-up-2">
      <div style={{ fontSize:12, fontWeight:700, color:T.textMuted, marginBottom:14, letterSpacing:.4, textTransform:"uppercase" }}>Informacoes do Roteiro</div>
      {[["Roteiro","225151"],["Rota","PRES PRUDENTE - ZONA SUL"],["Veiculo","VAN-ABC1234"],["Motorista","Pedro Lima"]].map(([k,v])=>(
        <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:`1px solid ${T.border}` }}>
          <span style={{ fontSize:13, color:T.textMuted }}>{k}</span>
          <span style={{ fontSize:13, fontWeight:600 }}>{v}</span>
        </div>
      ))}
    </div>
    <div className="card fade-up-3" style={{ marginTop:14 }}>
      <Progress value={1} max={4} color={T.green} label="Progresso das Entregas" />
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14, marginTop:16 }}>
        {[["Clientes",4,T.accent],["Peso","92 kg",T.amber],["Volume","0.16 m3",T.purple]].map(([l,v,c])=>(
          <div key={l} style={{ textAlign:"center" }}>
            <div className="condensed" style={{ fontSize:22, fontWeight:800, color:c }}>{v}</div>
            <div style={{ fontSize:11, color:T.textMuted }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ── ROUTER ── */
const SCREENS = {
dashboard: Dashboard, pedidos: Pedidos, faturamento: Faturamento,
roteiros: Roteiros,   produtos: Produtos,
atividade: Atividade, separacao: Separacao, bipagem: Bipagem,
historico: Historico, conferencia: Conferencia,
entregas: Entregas,   roteiro: RoteiroMot,
};

/* ── APP SHELL ── */
const AppShell = ({ user, onLogout }) => {
const nav = NAV_MAP[user.role];
const [screen, setScreen] = useState(nav[0].id);
const Comp = SCREENS[screen];
const roleColors = { comercial:T.accent, separador:T.purple, motorista:T.green, conferente:T.cyan };
const roleColor = roleColors[user.role] || T.accent;

return (
<div style={{ display:“flex”, minHeight:“100vh” }}>
{/* SIDEBAR */}
<div className=“sidebar-desktop” style={{ width:240, background:T.sidebar, display:“flex”, flexDirection:“column”, flexShrink:0, position:“sticky”, top:0, height:“100vh” }}>
<div style={{ padding:“24px 20px 20px”, borderBottom:“1px solid rgba(255,255,255,.06)” }}>
<div style={{ display:“flex”, alignItems:“center”, gap:10 }}>
<div style={{ width:36, height:36, background:`linear-gradient(135deg,${T.accent},#60A5FA)`, borderRadius:10, display:“flex”, alignItems:“center”, justifyContent:“center”, fontSize:18 }}>📦</div>
<div>
<div className=“condensed” style={{ fontSize:20, fontWeight:800, color:”#fff”, letterSpacing:-.3 }}>DistribFacil</div>
<div style={{ fontSize:10, color:“rgba(255,255,255,.3)”, letterSpacing:1.5, textTransform:“uppercase” }}>Sistema</div>
</div>
</div>
</div>
<div style={{ padding:“16px 20px”, borderBottom:“1px solid rgba(255,255,255,.06)”, display:“flex”, alignItems:“center”, gap:10 }}>
<div style={{ width:36, height:36, borderRadius:10, background:roleColor, display:“flex”, alignItems:“center”, justifyContent:“center”, fontSize:13, fontWeight:800, color:”#fff”, flexShrink:0 }}>
{user.avatar}
</div>
<div style={{ flex:1, minWidth:0 }}>
<div style={{ fontSize:13, fontWeight:700, color:”#fff”, overflow:“hidden”, textOverflow:“ellipsis”, whiteSpace:“nowrap” }}>{user.nome}</div>
<div style={{ fontSize:11, color:roleColor, textTransform:“capitalize”, fontWeight:600 }}>{user.role}</div>
</div>
<div style={{ width:8, height:8, borderRadius:“50%”, background:T.green }} />
</div>
<div style={{ flex:1, padding:“12px 12px”, overflowY:“auto” }}>
<div style={{ fontSize:10, color:“rgba(255,255,255,.2)”, letterSpacing:2, textTransform:“uppercase”, padding:“0 2px”, marginBottom:8, marginTop:4 }}>MENU</div>
{nav.map(n => (
<button key={n.id} className={`sidebar-link ${screen===n.id?"active":""}`} onClick={()=>setScreen(n.id)}>
<span style={{ fontSize:16 }}>{n.icon}</span>
<span>{n.label}</span>
</button>
))}
</div>
<div style={{ padding:“12px 12px 20px”, borderTop:“1px solid rgba(255,255,255,.06)” }}>
<button className=“sidebar-link” onClick={onLogout} style={{ color:“rgba(255,100,100,.7)” }}>
<span>🚪</span><span>Sair do Sistema</span>
</button>
</div>
</div>

```
  {/* MAIN */}
  <div style={{ flex:1, display:"flex", flexDirection:"column", minWidth:0 }}>
    <div style={{ background:T.white, borderBottom:`1.5px solid ${T.border}`, padding:"0 24px", height:60, display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0, position:"sticky", top:0, zIndex:10 }}>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <span style={{ fontSize:18 }}>{nav.find(n=>n.id===screen)?.icon}</span>
        <span style={{ fontSize:15, fontWeight:700 }}>{nav.find(n=>n.id===screen)?.label}</span>
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:16 }}>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:T.green }} />
          <span style={{ fontSize:12, color:T.green, fontWeight:600 }}>Online</span>
        </div>
        <div style={{ width:1, height:20, background:T.border }} />
        <button onClick={onLogout} className="btn-ghost" style={{ height:36, fontSize:12 }}>Sair</button>
      </div>
    </div>

    <div style={{ flex:1, overflowY:"auto", padding:"28px 28px 100px" }}>
      <div key={screen}>
        {Comp && <Comp />}
      </div>
    </div>

    {/* BOTTOM NAV mobile */}
    <div className="bottom-nav" style={{ position:"fixed", bottom:0, left:0, right:0, background:T.white, borderTop:`1.5px solid ${T.border}`, padding:"6px 0", zIndex:50 }}>
      {nav.map(n => (
        <button key={n.id} onClick={()=>setScreen(n.id)} style={{
          flex:1, background:"none", border:"none", cursor:"pointer", padding:"8px 4px",
          display:"flex", flexDirection:"column", alignItems:"center", gap:3,
          color:screen===n.id?T.accent:T.textMuted, fontFamily:"'Barlow',sans-serif"
        }}>
          <span style={{ fontSize:20 }}>{n.icon}</span>
          <span style={{ fontSize:9, fontWeight:screen===n.id?700:500 }}>{n.label.split("/")[0]}</span>
        </button>
      ))}
    </div>
  </div>
</div>
```

);
};

/* ── ROOT ── */
export default function App() {
const [user, setUser] = useState(null);
return (
<>
<style>{GLOBAL_CSS}</style>
{!user ? <Login onLogin={setUser} /> : <AppShell user={user} onLogout={()=>setUser(null)} />}
</>
);
}