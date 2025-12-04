const Footer = () => {
  return (
    <div className="flex flex-col w-full h-[5vh] bg-transparent justify-center items-center p-4 absolute bottom-0">
      <p className="text-zinc-400 italic text-xs lg:text-sm text-center border-t border-zinc-400">
        &quot;Nós, Policiais Militares, sob a proteção de Deus, estamos
        compromissados com a defesa da Vida, da Integridade Física e da
        Dignidade da Pessoa Humana.&quot;
      </p>
      <div className="flex w-full justify-center">
        <p className="text-zinc-400 italic text-xs lg:text-sm text-center">
          6º BPRv Inteligência &copy; {new Date().getFullYear()} Desenvolvido
          pelo Cb PM Gabriel
        </p>
      </div>
    </div>
  );
};

export default Footer;
