import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GenresPieChart({
  books
}) {
  const [genresData, setGenresData] = useState(null);
  console.log({books, genresData})

  const extractGenresInfo = () => {
    const genresInfo = {};
    let genresInfoArr = [];

    books.forEach((bookInfo)=>{
      const book = bookInfo[1];
      const genre = book && book.genre;

      if (genre) {
        if (genresInfo[genre]) {
          genresInfo[genre] += 1;
        } else {
          genresInfo[genre] = 1;
        }
      }
    })

    const sortedGenresInfoArr = Object.entries(genresInfo).sort((a, b)=>{
      return b[1] - a[1];
    });

    genresInfoArr = sortedGenresInfoArr;
    
    //shorten array of authors longer than 6
    if (sortedGenresInfoArr.length > 6) {
      const firstSixGenresArr = sortedGenresInfoArr.slice(0, 5);
      const remainingGenresArr = sortedGenresInfoArr.slice(5);
      const remainingGenresQuantity = remainingGenresArr.map(arr => arr[1]).reduce((partialSum, a) => partialSum + a, 0);
      firstSixGenresArr.push(["Other", remainingGenresQuantity]);
      genresInfoArr = firstSixGenresArr;
    } 
    const genresNames = genresInfoArr.map(infoRow => infoRow[0]);
    const genresData = genresInfoArr.map(infoRow => infoRow[1]);
    
    const data = {
      labels: genresNames,
      datasets: [
        {
          label: '# of Votes',
          data: genresData,
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

    setGenresData(data);
    
  }

  useEffect(()=>{
    extractGenresInfo();
    // eslint-disable-next-line
  }, [])

  return (
    genresData ? (
      <Pie data={genresData} />
    ) : null
  );
}