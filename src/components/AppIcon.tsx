type AppIconProps = {
  imgUrl: any;
};

function AppIcon({ imgUrl }: AppIconProps) {
  return (
    <div
      className="rounded-lg bg-cover bg-center bg-no-repeat w-12 h-12 opacity-75 hover:opacity-100 transition-opacity duration-300"
      style={{ backgroundImage: `url(${imgUrl})` }}
    ></div>
  );
}

export default AppIcon;
