import React, { useEffect, useRef, useState } from 'react';

function useModal<T>() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLBodyElement>(document.querySelector('body'));
  const [modalContent, setModalContent] = useState<T | null>(null);

  useEffect(() => {
    const current = modalRef.current;

    if (modalContent) {
      current?.showModal();
      bodyRef.current?.setAttribute('style', 'overflow:hidden');
    } else {
      bodyRef.current?.setAttribute('style', 'overflow:visible');
      current?.close();
    }
  }, [modalContent]);

  return { modalRef, modalContent, setModalContent };
}

export default useModal;
