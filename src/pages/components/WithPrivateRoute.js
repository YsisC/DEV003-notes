// import { onAuthStateChanged } from 'firebase-app/client';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// const WithPrivateRoute = ({ children }) => {
//   const router = useRouter();

//   useEffect(() => {
//     onAuthStateChanged((user) => {
//       if (!user) {
//         router.push('/login');
//       }
//     });
//   }, []);

//   return <>{children}</>;
// };

// export default WithPrivateRoute;