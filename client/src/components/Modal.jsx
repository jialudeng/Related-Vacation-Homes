// import React from 'react';
// import styled from 'styled-components';

// const ModalDiv1 = styled.div`
//     z-index: 2000 !important;
//     position: fixed !important;
//     top: 0px !important;
//     right: 0px !important;
//     bottom: 0px !important;
//     left: 0px !important;
//     overflow-y: auto !important;
//     background: rgba(0, 0, 0, 0.75) !important;
// `;

// const ModalDiv2 = styled.div`
//     -webkit-box-align: center !important;
//     display: flex !important;
//     align-items: center !important;
//     min-height: 100vh !important;
// `;

// const ModalDiv3 = styled.div`
//     position: relative !important;
//     margin-left: auto !important;
//     margin-right: auto !important;
// `; 

// const ModalDiv4 = styled.div`
//     animation-name: none !important;
//     position: relative !important;
//     margin-top: 64px !important;
//     margin-bottom: 64px !important;
//     max-width: 568px !important;
//     width: 90vw !important;
//     overflow: visible !important;
// `;

// const ModalSection = styled.div`
//     display: block;
// `;

// const ModalInnerDiv = styled.div`
//     padding: 32px !important;
// `;

// const ModalCloseButtonDiv = styled.div`
//     background-color: rgb(255, 255, 255) !important;
//     margin-bottom: 24px !important;
// `;

// const ModalHeader = styled.header`
//     font-weight: 600;
// `;

// const ModalContentSection = styled.section`
//     display: block;
// `;

// const ModalCreateNewListDiv = styled.div`
//     box-sizing: border-box;
// `;

// const ModalImageDescriptionDiv = styled.div`
//     position: absolute !important;
// // `;


// const ModalDiv = styled.div`
//     display: ${props => props.showingModal ? "block" : "none"};
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.6);
// `;

// const ModalMainSection = styled.section`
//     position: fixed;
//     background: white;
//     width: 80%;
//     height: auto;
//     top: 50%; 
//     left: 50%;
//     transform: translate(-50%, -50%);
// `;

// const Modal = ({handleToggleModal, showingModal}) => {
//     return (
//         <ModalDiv showingModal={showingModal}>
//             <ModalMainSection>
//                 <button onClick={handleToggleModal}> X </button>
//                 <h1> Save to a list </h1>
//                 <p> Create a list </p>
//             </ModalMainSection>
//         </ModalDiv>
//     )
// }

// export default Modal;