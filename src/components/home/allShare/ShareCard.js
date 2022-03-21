import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, CardActionArea, Menu, MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import UpdateOrDelete from "./UpdateOrDelete";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ShareCard = ({
  share,
  role,
  ActioinApproval,
  userAppro,
  userpanding,
  adminPen,
  deleteShare,
}) => {
  //   // console.log(adminPen);
  const { admin, user } = useSelector((state) => state.USER);
  const history = useHistory();
  const {
    _id,
    file,
    title,
    traveler,
    description,

    createTime,
  } = share;
  // // console.log(share);
  // // alert("hellow");
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const [test, settest] = React.useState(admin);
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const updateShare = (_id) => {
    history.push(`/updatefile/${_id}`);
  };
  return (
    <>
      <div className="col-md-4 col-sm-5 col-12 my-3 mx-auto   ">
        <Card sx={{ maxWidth: 345 }} className="mx-auto">
          <CardHeader
            avatar={
              <Avatar
                src={
                  share?.user?.picture
                    ? share?.user?.picture
                    : `data:image/jpeg;base64,${share?.user?.pictur1}`
                }
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
              >
                {traveler.toUpperCase().charAt()}
              </Avatar>
            }
            action={
              <>
                {adminPen && (
                  <UpdateOrDelete
                    updateShare={updateShare}
                    deleteShare={deleteShare}
                    _id={_id}
                  ></UpdateOrDelete>
                )}
                {userAppro === "userAppro" && (
                  <UpdateOrDelete
                    updateShare={updateShare}
                    deleteShare={deleteShare}
                    _id={_id}
                  ></UpdateOrDelete>
                )}
                {userpanding === "userpanding" && (
                  <UpdateOrDelete
                    updateShare={updateShare}
                    deleteShare={deleteShare}
                    _id={_id}
                  ></UpdateOrDelete>
                )}
              </>
            }
            title={
              <Link
                className="text-decoration-none text-dark"
                onClick={() =>
                  history.push(`/dashbord/perUserProfile/${share?.email}`)
                }
              >
                {traveler}
              </Link>
            }
            subheader={createTime}
          />
          <CardActionArea>
            <CardMedia
              component="img"
              height="194"
              image={`data:image/jpeg;base64,${file}`}
              alt="Paella dish"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description.length >= 100
                  ? description.slice(1, 99)
                  : description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              onClick={() => history.push(`/singleshare/${_id}`)}
              size="small"
            >
              View
            </Button>

            {role === "admin" ? (
              <Button
                onClick={() => ActioinApproval(_id)}
                size="small"
                className="ms-auto"
              >
                Approval
              </Button>
            ) : (
              ""
            )}
            {userAppro === "userAppro" && (
              <>
                <Button size="small" className="ms-auto">
                  Approval
                </Button>
              </>
            )}
            {userpanding === "userpanding" && (
              <>
                <Button size="small" className="ms-auto">
                  Pandding
                </Button>
              </>
            )}
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default ShareCard;
