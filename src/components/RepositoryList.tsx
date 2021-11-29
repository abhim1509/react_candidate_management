const RepositoryList = ({ data }: any) => {
  console.log("Repo List:", data);
  return (
    <div>
      {data.map((item: any) => {
        return <div key={item.id}>{item.full_name}</div>;
      })}
    </div>
  );
};

export default RepositoryList;
