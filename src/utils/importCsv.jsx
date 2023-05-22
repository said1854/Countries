import Papa from 'papaparse';

export default function () {
  const [rows, setRows] = React.useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch('../src/data/gpd_per_capita.csv');
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setRows(rows);
      rows.map((row) => {
        console.log(row);
      });
      console.log(rows);
      return rows;
    }
    getData();
  }, []); // [] means just do this once, after initial render
}
