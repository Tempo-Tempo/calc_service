import MainPage from "../../pages/MainPage";
import MySquare from "../../pages/figurePages/MySquare";
import MyCircle from "../../pages/figurePages/MyCircle";
import MyTriangle from "../../pages/figurePages/MyTriangle";
import MyRectangle from "../../pages/figurePages/MyRectangle";
import MyRhombus from "../../pages/figurePages/MyRhombus";
import MyParallelogram from "../../pages/figurePages/MyParallelogram";
import MyTrapezoid from "../../pages/figurePages/MyTrapezoid";
import MyRecTriangle from "../../pages/figurePages/MyRecTriangle";


export const ArrRoutes = [
   { path: "/", component: MainPage, exact: true },
   { path: "/square", component: MySquare, exact: true },
   { path: "/triangle", component: MyTriangle, exact: true },
   { path: "/circle", component: MyCircle, exact: true },
   { path: "/rectangle", component: MyRectangle, exact: true },
   { path: "/rhombus", component: MyRhombus, exact: true },
   { path: "/parallelogram", component: MyParallelogram, exact: true },
   { path: "/trapezoid", component: MyTrapezoid, exact: true },
   { path: "/rec-triangle", component: MyRecTriangle, exact: true },
]