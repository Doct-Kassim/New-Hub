// // MarketPriceViewer.js
// import React from 'react';

// import { useParams } from 'react-router-dom';

// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// import marketPriceData from '../data/marketPriceData.json';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const MarketPriceViewer = () => {
//   const { id } = useParams();
//   const file = marketPriceData.find((f) => f.id.toString() === id);

//   if (!file) return <p>File not found.</p>;

//   return (
//     <div className="p-3">
//       <h4>{file.title}</h4>
//       <div style={{ width: '100%', height: '80vh', overflow: 'auto', border: '1px solid #ccc' }}>
//         <Document file={file.fileUrl} onLoadError={console.error}>
//           <Page pageNumber={1} />
//         </Document>
//       </div>
//     </div>
//   );
// };

// export default MarketPriceViewer;
