import TabButton from "../TabButton";
import Section from "../../Section";
import Tabs from "../Tabs";
import { useState } from "react";
import { EXAMPLES } from "../../data";

export default function Examples() {
  // React Hooks - useState();
  // Sempre chamado dentro de um component
  // Sempre são chamados no top-level do component - não chamar dentro de uma função por exemplo
  const [selectedContent, setSelectedContent] = useState();

  function handleSelect(selectedButton) {
    // setSelectedContent(selectedButton); // É "agendada" a atualização do selectedContent
    // console.log(selectedContent); // Ele printa o "antigo" pq ainda não foi atualzado
    setSelectedContent(selectedButton);
  }

  let tabContent = <p>Escolhe um tópico ai filho</p>;

  if (selectedContent) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedContent].title}</h3>
        <p>{EXAMPLES[selectedContent].description}</p>
        <pre>
          <code>{EXAMPLES[selectedContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedContent === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedContent === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedContent === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedContent === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
