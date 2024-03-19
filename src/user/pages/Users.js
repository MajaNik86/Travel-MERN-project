import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Maja Nikolic Tapavicki",
      image:
        "https://scontent.fbeg3-2.fna.fbcdn.net/v/t39.30808-1/384098789_10230289004545182_2592925189960802314_n.jpg?stp=dst-jpg_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHxY-OxG59TF3_K4hDn7TwHq5lz0oXXj5urmXPShdePm0wcjrasPRs8ClA5qlobsgc&_nc_ohc=K_5dOjWmAjoAX9zHku8&_nc_ht=scontent.fbeg3-2.fna&oh=00_AfDOu5vOjfz_DpCXcbS2hfaoKP8I80_icM74F9IHxgcPDA&oe=65FDE313",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
