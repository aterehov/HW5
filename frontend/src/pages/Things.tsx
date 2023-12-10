import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material";
import api from "../api/api";
import Furniture from "../models/furniture";
import { useAsync } from "react-async";
import { Api } from "@mui/icons-material";
import { useEffect, useState } from "react";


interface ThingsProps {
  type: string;
}

// interface ThingProps {
//   image: string;
//   name: string;
//   description: string;
//   price: number;
// }

function Thing(props: Furniture & ThingsProps) {
  return (
    <Link href={"/info/" + props.type + "/" + props._id}>
      <Card sx={{width: 200}}>
        <CardMedia sx={{height: 200, width: 200}} image={props.image} />
        <CardContent>
          <Typography variant="body1">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Купить</Button>
          <Typography variant="h6">
            {props.price + " р."}
          </Typography>
        </CardActions>
      </Card>
    </Link>
  )
}

async function ThingsProtoAsync(props: ThingsProps) {
  console.log("XXXX");
  console.log(props);
  const Api = new api();
  if (props.type === "table") {
    return await Api.tableGetAll();
  } else if (props.type === "cupboard") {
    return await Api.cupboardGetAll();
  } else if (props.type === "chair") {
    return await Api.chairGetAll();
  }
}

function ThingsProto(props: ThingsProps) {
  const Api = new api();
  let arr;
  // const {data, error} = useAsync(async () => ThingsProtoAsync(props), []);
  const [end, setEnd] = useState(false);
  const [data, setData] = useState({data: []});
  useEffect(() => {
    const f = async () => {
      const d = await ThingsProtoAsync(props);
      setData(d);
      setEnd(true);
    };

    f();
  }, []);
  console.log(data);
  return !end ? null : (
    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
    {data.data.map((item: Furniture) => {
      console.log(item);
      return <Thing type={props.type} {...item} />})}
    </div>
  );
}

function Things(props: ThingsProps) {
  if (props.type == "all") {
    return (
      <div>
        <Things type="table" />
        <Things type="cupboard" />
        <Things type="chair" />
      </div>
    )
  } else if (props.type == "table") {
    return (
      <div>
        <Typography variant="h1">
          <Link href="/things/table">Столы</Link>
        </Typography>
        <ThingsProto type="table" />
      </div>
    )
  } else if (props.type == "cupboard") {
    return (
      <div>
        <Typography variant="h1">
          <Link href="/things/cupboard">Шкафы</Link>
        </Typography>
        <ThingsProto type="cupboard" />
      </div>
    )
  } else if (props.type == "chair") {
    return (
      <div>
        <Typography variant="h1">
          <Link href="/things/chair">Стулья</Link>
        </Typography>
        <ThingsProto type="chair" />
      </div>
    )
  } else {
    return <div></div>
  }
  // return (
  //   <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
  //     {/* <Thing image="images/table1.webp" name="Стол" description="Самый обычный стол" price={1000} /> */}
  //   </div>
  // );
}

export default Things;