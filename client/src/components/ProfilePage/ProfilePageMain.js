import FavoriteList from "./FavoriteList";

const ProfilePageMain = (props) => {
  return (
    <main>
      <FavoriteList
        info={props.tv}
        dark={props.dark}
        media={"tv"}
        list_title={"Favorite TV"}
      />
      <FavoriteList
        info={props.movies}
        dark={props.dark}
        media={"movie"}
        list_title={"Favorite Movies"}
      />
    </main>
  );
};

export default ProfilePageMain;
