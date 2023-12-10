import { useEffect, useState } from "react";
import api from "../api/api";
import Furniture from "../models/furniture";
import { Paper, Typography } from "@mui/material";
import { Image } from "react-bootstrap";
import { Params, useParams } from "react-router";

interface ObjectProps {
  type: string,
  objectid: string
}

async function getfunc(props: Readonly<Params<keyof ObjectProps>>) {
  console.log("getfunc props");
  console.log(props);
  const Api = new api();
  if(!props.objectid) {
    return {};
  }
  if(props.type == "table") {
    return await Api.tableGetById(props.objectid);
  } else if (props.type == "cupboard") {
    return await Api.cupboardGetById(props.objectid);
  } else if (props.type == "chair") {
    return await Api.chairGetById(props.objectid);
  } else {
    return {};
  }
}

function Object() {
  const props = useParams<keyof ObjectProps>();
  console.log("props: ");
  console.log(props);
  let header;
  //let getfunc: (id: string) => Promise<any>;
  const Api = new api();
  const [data, setData] = useState<{data: Furniture}>();
  const [end, setEnd] = useState(false);
  
  useEffect(() => {
    const f = async () => {
      const d = await getfunc(props);
      console.log("useEffect d:");
      console.log(d);
      setData(d);
      setEnd(true);
    };

    f();
  }, []);

  if(props.type == "table") {
    header = "Стол";
    // object = await Api.tableGetById(props.objectid);
  } else if (props.type == "cupboard") {
    header = "Шкаф";
  } else if (props.type == "chair") {
    header = "Стул";
  } else {
    return (
      <h1>Объект не найден</h1>
    )
  }

  
  return !data ? null : (
    <Paper elevation={0}>
      <Typography variant="h2">{header}</Typography>
      <Image src={data.data.image} />
      <Typography variant="h6">Размер: </Typography>
      <Typography variant="body2">{data.data.size}</Typography>
      <br />
      <Typography variant="h6">Материал: </Typography>
      <Typography variant="body2">{data.data.material}</Typography>
      <br />
      <Typography variant="h6">Цвет: </Typography>
      <br />
      <Typography style={{paddingLeft: "10px"}} variant="h6">имя: </Typography>
      <Typography style={{paddingLeft: "10px"}} variant="body2">{data.data.color.name}</Typography>
      <br />
      <Typography style={{paddingLeft: "10px"}} variant="h6">HEX: </Typography>
      <Typography style={{paddingLeft: "10px"}} variant="body2">{data.data.color.hex}</Typography>
      <br />
      <Typography variant="h6">Осталось: </Typography>
      <Typography variant="body2">{data.data.left + "шт."}</Typography>
      <br />
      <Typography variant="h6">Цена: </Typography>
      <Typography variant="body2">{data.data.price + "р."}</Typography>
      <br />
      <Typography variant="h6">Описание: </Typography>
      <Typography variant="body2">{data.data.description}</Typography>
    </Paper>
  )
}

export default Object;