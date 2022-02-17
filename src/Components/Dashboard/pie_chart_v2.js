import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart2({
  books
}) {
  //const [authorsData, setAuthorsData] = useState(null);
  const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

  const extractAuthorsInfo = () => {
    const authorsInfo = {};
    let authorsInfoArr = [];

    books.forEach((bookInfo)=>{
      const book = bookInfo[1];
      const author = book && book.author;

      if (author) {
        if (authorsInfo[author]) {
          authorsInfo[author] += 1 /* authorsInfo.author + 1 */;
        } else {
          authorsInfo[author] = 1;
        }
      }
    })

    const sortedAuthorsInfoArr = Object.entries(authorsInfo).sort((a, b)=>{
      return b[1] - a[1];
    });

    authorsInfoArr = sortedAuthorsInfoArr;
    
    //shorten array of authors longer than 6
    if (sortedAuthorsInfoArr.length > 6) {
      const firstSixAuthorsArr = sortedAuthorsInfoArr.slice(0, 5);
      const remainingAuthorsArr = sortedAuthorsInfoArr.slice(5);
      const remainingAuthorsQuantity = remainingAuthorsArr.map(arr => arr[1]).reduce((partialSum, a) => partialSum + a, 0);
      firstSixAuthorsArr.push(["Other", remainingAuthorsQuantity]);
      authorsInfoArr = firstSixAuthorsArr;
    } 
    console.log({authorsInfoArr})
  }

  useEffect(()=>{
    extractAuthorsInfo();
    // eslint-disable-next-line
  }, [])

  return <Pie data={data} />;
}