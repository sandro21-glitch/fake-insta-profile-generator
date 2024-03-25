type MainListItemTypes = {
  highlight: { id: string; name: string; image: string };
};

const MainListItem = ({ highlight }: MainListItemTypes) => {
  const { image, name } = highlight;
  return (
    <li className="min-w-[80px] w-[80px] flex flex-col gap-[3px] items-center">
      <div
        className="w-[63px] h-[63px] rounded-full mt-[3px] cursor-pointer
     text-modalHeaderSize flex justify-center items-center overflow-hidden relative
     before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2
    before:border before:border-[#dedede] before:rounded-full before:w-[62px] before:h-[62px]
     "
      >
          <img src={image} alt={name} className="w-[56px] h-[56px] rounded-full" />
      </div>
      <p className="text-[12px]">{name}</p>
    </li>
  );
};

export default MainListItem;
