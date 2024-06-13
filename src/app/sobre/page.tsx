export default function Sobre() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#001C39] p-4 rounded-md shadow-md text-white">
          <h2 className="text-2xl font-bold mb-2">Sobre Nós</h2>
          <p className="text-lg">
            Somos um grupo do terceiro semestre da faculdade, unidos por um objetivo comum: Utilizar
            a tecnologia para melhorar a qualidade de vida em nossa comunidade. Como parte do nosso
            curso, estamos desenvolvendo um projeto que visa monitorar a qualidade do ar em
            diferentes bairros da nossa cidade, utilizando o Arduino para coletar dados sobre os
            poluentes presentes no ar.
          </p>
        </div>
        <div className="bg-[#001C39] p-4 rounded-md shadow-md text-white">
          <h2 className="text-2xl font-bold mb-2">Nossa Missão</h2>
          <p className="text-lg">
            Nosso principal objetivo é fornecer informações acessíveis sobre a qualidade do ar que
            respiramos diariamente. Acreditamos que, ao compreender melhor a distribuição e os
            níveis de poluição em diferentes áreas, podemos incentivar a comunidade e os
            responsáveis pelas políticas públicas a tomar medidas concretas para melhorar o ambiente
            urbano.
          </p>
        </div>
        <div className="bg-[#001C39] p-4 rounded-md shadow-md text-white">
          <h2 className="text-2xl font-bold mb-2">O Projeto</h2>
          <p className="text-lg">
            Para alcançar nossa missão, usamos sensores baseados em Arduino, capazes de detectar
            poluentes atmosféricos. Instalados em pontos estratégicos de diferentes bairros para
            coletar dados sobre a qualidade do ar. Os dados coletados serão então enviados para uma
            plataforma online, onde serão analisados e visualizados de forma clara e intuitiva.
          </p>
        </div>
        <div className="bg-[#001C39] p-4 rounded-md shadow-md text-white">
          <h2 className="text-2xl font-bold mb-2">Nossos Valores</h2>
          <ul className="list-disc list-inside text-lg">
            <li>
              <strong>Educação e Consciência Ambiental:</strong> Queremos educar a população sobre a
              importância da qualidade do ar e como ela afeta nossa saúde e bem-estar.
            </li>
            <li>
              <strong>Transparência:</strong> Todos os dados coletados serão disponibilizados
              publicamente, promovendo a transparência e permitindo que todos possam acessar e
              entender as informações.
            </li>
            <li>
              <strong>Ação Comunitária:</strong> Acreditamos no poder da comunidade em fazer a
              diferença. Propostas como o plantio de árvores em áreas mais poluídas são exemplos de
              ações que podemos tomar juntos para melhorar nosso ambiente.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
