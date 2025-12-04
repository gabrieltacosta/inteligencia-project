import Links from "@/components/Links";
import Weather from "@/components/Weather";

export default function Home() {
  return (
    <div className="w-full  flex flex-col justify-start items-center gap-10 p-6 mb-20">
      <div className="w-full max-w-7xl flex justify-center items-center">
        <div className="flex-1">
          <h2 className="text-lg lg:text-3xl font-bold text-center">
            Ferramentas de Inteligência
          </h2>
        </div>
        <div>
          <Weather />
        </div>
      </div>

      <div className="flex max-w-7xl w-full mx-auto flex-wrap justify-around gap-4 lg:gap-10">
        <Links
          href="http://operacional.muralhapaulista.sp.gov.br/"
          src="/muralha.svg"
          text="Muralha Paulista"
          blank="_blank"
        />
        <Links
          href="http://monitoramento.muralhapaulista.sp.gov.br/"
          src="/muralha.svg"
          text="Monitoramento Muralha Paulista"
          blank="_blank"
        />
        <Links
          href="http://inteligenciaweb.intranet.policiamilitar.sp.gov.br"
          src="/pmesp.svg"
          text="Inteligência Web"
          blank="_blank"
        />
        <Links
          href="https://alertabrasil.prf.gov.br/alertabrasil/login"
          src="/alertaBrasil.svg"
          text="Alerta Brasil"
          blank="_blank"
        />
        <Links
          href="http://dr.itsbrasil.net.br/"
          src="/rodoviaria2.png"
          text="DER - its brasil"
          blank="_blank"
        />
        <Links
          href="https://blitzsjc.sistemasfotosensores.com/"
          src="/fotoblitz.ico"
          text="fotobliz - sjc"
          blank="_blank"
        />

        <Links
          href="https://www.infocrim.ssp.sp.gov.br/login"
          src="/sspNovo.png"
          text="INFOCRIM 4.0"
          blank="_blank"
        />
        <Links
          href="https://copomonline.policiamilitar.sp.gov.br/Login/Login"
          src="/pmesp.svg"
          text="COPOM online"
          blank="_blank"
        />

        <Links
          href="https://seguranca.sinesp.gov.br/sinesp-seguranca/login.jsf?goto=INFOSEG"
          src="/infoseg.ico"
          text="INFOSEG"
          blank="_blank"
        />
        <Links
          href="https://www.hnprd.dipol.prodesp.sp.gov.br/web/(S(pqn0dkxyr0lb2ojxxwnkul5b))/Home/UnknownPage"
          src="/ssp.ico"
          text="PRODESP"
          blank="_blank"
        />
        <Links
          href="https://portalbnmp.cnj.jus.br/#/pesquisa-peca"
          src="/bnmp.ico"
          text="portal bnmp"
          blank="_blank"
        />

        <Links
          href="https://www.rh.intranet.policiamilitar.sp.gov.br/"
          src="/pmesp.svg"
          text="PORTAL SGP/SIRH"
          blank="_blank"
        />

        <Links
          href="http://www.intranet.policiamilitar.sp.gov.br/"
          src="/pmesp.svg"
          text="Intranet"
          blank="_blank"
        />

        <Links
          href="http://sistemasopr.intranet.policiamilitar.sp.gov.br/siopmweb/HSiopm.aspx"
          src="/pmesp.svg"
          text="SIOPM Web"
          blank="_blank"
        />
        <Links
          href="http://10.61.18.121/Funcional/6bprvinteligencia.nsf"
          src="/logoEmail.png"
          text="Email da Seção"
          blank="_blank"
        />
        <Links
          href="https://correio.policiamilitar.sp.gov.br/iwaredir.nsf"
          src="/logoEmail.png"
          text="Email Pessoal"
          blank="_blank"
        />
        <Links
          href="/area-dos-batalhoes"
          src="/maps.png"
          text="Limites de área dos Batalhões"
        />
        <Links
          href="https://ead.pmesp.org/"
          src="/pmesp.svg"
          text="PVT/ITP/EAP"
          blank="_blank"
        />
        <Links
          href="/consulta"
          src="/pmesp.svg"
          text="Consulta DEJEM/DELEGADA"
        />
        <Links
          href="https://minhaarea.sp.gov.br/plataformasp"
          src="/sspNovo.png"
          text="SEI - Sistema Eletrônico de Informações"
          blank="_blank"
        />
        <Links
          href="https://web.whatsapp.com/"
          src="/whatsapp.png"
          text="Whatsapp Web"
          blank="_blank"
        />
        <Links
          href="https://www.ciaf.policiamilitar.sp.gov.br/folhadepagamento/autenticacaosegura.aspx"
          src="/pmesp.svg"
          text="holerite"
          blank="_blank"
        />
        <Links
          href="/previsao"
          src="/rodoviaria2.png"
          text="Previsão do Almoço"
        />
        <Links
          href="http://10.36.216.254:8000/"
          src="/rodoviaria2.png"
          text="Plano de Chamada | Nada Consta"
          blank="_blank"
        />
        <Links
          href="https://pmesprodoviario.ciasat.com.br/?lang=br"
          src="/rodoviaria2.png"
          text="Telemetria"
          blank="_blank"
        />

        <Links
          href="https://mytkstar.net/index.aspx"
          src="/rodoviaria2.png"
          text="Rastreador"
          blank="_blank"
        />
        <Links
          href="http://10.36.216.220:8080/"
          src="/rodoviaria2.png"
          text="Servidor p2"
          blank="_blank"
        />
        <Links
          href="/cpf"
          src="/rodoviaria2.png"
          text="Consulta Telefones"
        />
      </div>
    </div>
  );
}
