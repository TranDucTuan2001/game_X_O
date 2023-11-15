
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://nguoinoitieng.vn/wp-content/uploads/2021/08/hieuunganh.com_611a9bbe5a7d9.png',
    imageSize: 90,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  
  