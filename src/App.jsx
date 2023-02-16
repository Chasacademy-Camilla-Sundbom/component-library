import React, { useState } from "react";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";
import Badge from "./components/Badge/Badge";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";

import { TbBadges } from "react-icons/Tb";
import { AiOutlineWarning } from "react-icons/ai";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onDismiss() {
    alert("dissmiss");
  }

  return (
    <div
      className="flex p-8 gap-3 justify-center items-center"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Button size="small" color="secondary" disabled={true}>
        Click on me!
      </Button>
      <Button size="medium" color="secondary" disabled={false}>
        Click on me!
      </Button>
      <Button size="large" color="primary" disabled={true}>
        Click on me!
      </Button>
      <Alert
        onDismiss={onDismiss}
        color="primary"
        size="small"
        title={"Alert"}
        icon={<AiOutlineWarning />}
      />
      <Badge color="primary" size="small" title={"Warning"} icon={<TbBadges />} />
      <Card
        href="https://flowbite.com/docs/images/blog/image-1.jpg"
        imgAlt="En bild på ett skrivbord"
        imgSrc="skrivbord.jpg"
      />

      <button onClick={() => setShowModal(true)}>Open!</button>

      <Modal show={showModal}>
        <Modal.Header>
          <h1>Header</h1>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world are
              updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes
              into effect on May 25 and is meant to ensure a common set of data
              rights in the European Union. It requires organizations to notify users
              as soon as possible of high-risk data breaches that could personally
              affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShowModal(false)}>I accept</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
