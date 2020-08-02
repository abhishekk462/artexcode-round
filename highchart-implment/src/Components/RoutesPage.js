import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BarChart from "./HighChart/BarChart";
import PieChart from "./HighChart/PieChart";
import UserTable from "./UserTable";
import { Nav, NavItem, NavLink } from "reactstrap";

const RoutesPage = () => {
  return (
    <Router>
        <Nav>
          <NavItem>
            <NavLink href="/">AG Grid Table</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/highchart">Bar Chart</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/piechart">Pie Chart</NavLink>
          </NavItem>
        </Nav>
        <hr />
        <Switch>
          <Route exact path="/">
            <UserTable />
          </Route>
          <Route path="/highchart">
            <BarChart />
          </Route>
          <Route path="/piechart">
          <PieChart/>
        </Route>
        </Switch>
    </Router>
  );
}
export default RoutesPage;