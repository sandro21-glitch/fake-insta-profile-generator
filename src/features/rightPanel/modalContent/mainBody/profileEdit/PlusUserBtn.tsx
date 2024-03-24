import plusUser from "/assets/plusUser.svg";

const PlusUserBtn = () => {
  return (
    <div className="leading-[22px] bg-[#ebebeb] px-[10px] py-[5px] h-[30px] rounded-md">
      <img src={plusUser} alt="plus user" className="scale-x-[-1]" />
    </div>
  );
};

export default PlusUserBtn;
