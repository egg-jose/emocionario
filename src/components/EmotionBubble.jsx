import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const useOutsideClicked = (ref, setShowModal) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

const EmotionBubble = ({ name, logo, description, even, imageReference }) => {
  const [showModal, setShowModal] = useState(false);
  const modalWrapperRef = useRef(null);
  useOutsideClicked(modalWrapperRef, setShowModal);
  return (
    <>
      <button
        className={`card ${even ? "up" : "down"}`}
        onClick={() => setShowModal(true)}
      >
        <h3 className="">{name}</h3>
        <div className="card-image">
          <img src={logo} alt="name" title={imageReference} />
        </div>
        <FontAwesomeIcon icon="fa-solid fa-sheep" />
      </button>
      {showModal ? (
        <Modal>
          <div ref={modalWrapperRef}>
            <button onClick={() => setShowModal(false)}>
              <FontAwesomeIcon icon={faXmark} size="2x" />
            </button>
            <h2>{name}</h2>
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default EmotionBubble;
