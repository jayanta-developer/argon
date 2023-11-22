/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Media,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/*<Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="mb-0">Sales value</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>          
        </Row> */}
        <Row>
          <Col className="mb-5 mb-xl-0" xl="5">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Recent Transactions</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Rajendra Sheth</th>
                    <td>4,569</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>                    
                  </tr>
                  <tr>
                    <th scope="row">Ambika Khan</th>
                    <td>3,985</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      46,53%
                    </td>                    
                  </tr>
                  <tr>
                    <th scope="row">Bimla Bhavsar</th>
                    <td>3,513</td>  
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>                  
                  </tr>
                  <tr>
                    <th scope="row">Himesh Sachdev</th>
                    <td>2,050</td> 
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      46,53%
                    </td>                   
                  </tr>
                  <tr>
                    <th scope="row">Ghalib Peri</th>
                    <td>1,795</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>                    
                  </tr>
                  <tr>
                    <th scope="row">Ambika Khan</th>
                    <td>3,985</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      46,53%
                    </td>                    
                  </tr>
                  <tr>
                    <th scope="row">Bimla Bhavsar</th>
                    <td>3,513</td>  
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>                  
                  </tr>
                  <tr>
                    <th scope="row">Himesh Sachdev</th>
                    <td>2,050</td> 
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      46,53%
                    </td>                   
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="7">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Latest Car Entry</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Car Name</th>
                    <th scope="col">Date of entry</th>
                    <th scope="col">user Name</th>
                    <th scope="col">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Maruti Suzuki</td>
                    <td>12/07/2023</td>
                    <td>Hemendra Rai</td>
                    <td><a href="#">link</a></td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Honda City</td>
                    <td>12/07/2023</td>
                    <td>Mukund Goyal</td>
                    <td><a href="#">link</a></td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Hyundai</td>
                    <td>12/07/2023</td>
                    <td>Abhinav Mody</td>
                    <td><a href="#">link</a></td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Ford</td>
                    <td>12/07/2023</td>
                    <td>Hemendra Rai</td>
                    <td><a href="#">link</a></td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Tata Nexon</td>
                    <td>12/07/2023</td>
                    <td>Zahir Pau</td>
                    <td><a href="#">link</a></td>
                  </tr>                  
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
