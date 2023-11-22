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
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const CarManagement = () => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--8" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Car Management</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">image</th>
                    <th scope="col">car name</th>
                    <th scope="col">model</th>
                    <th scope="col">make year</th>
                    <th scope="col">user name</th>
                    <th scope="col">number of notecard</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={require("../../assets/img/theme/bootstrap.jpg")}
                          />
                        </a>
                      </Media>
                    </th>
                    <td>BMW</td>
                    <td>Series (E87)</td>
                    <td>2013</td>
                    <td>Hemendra Rai</td>
                    <td><div className="d-flex align-items-center">
                      <span className="mr-2">260</span>
                      <div>
                        <Progress
                          max="1000"
                          value="260"
                          barClassName="bg-danger"
                        />
                      </div>
                    </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Maruti Suzuki</td>
                    <td>Ertiga</td>
                    <td>2020</td>
                    <td>Mukund Goyal</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">542</span>
                        <div>
                          <Progress
                            max="1000"
                            value="542"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Honda City</td>
                    <td>506 L</td>
                    <td>2017</td>
                    <td>Mukund Goyal</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">148</span>
                        <div>
                          <Progress
                            max="1000"
                            value="148"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Hyundai</td>
                    <td>Compact SUV</td>
                    <td>2020</td>
                    <td>Abhinav Mody</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">620</span>
                        <div>
                          <Progress
                            max="1000"
                            value="620"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Ford</td>
                    <td>EcoSport</td>
                    <td>F321</td>
                    <td>Hemendra Rai</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">880</span>
                        <div>
                          <Progress
                            max="1000"
                            value="880"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Tata Nexon</td>
                    <td>N123</td>
                    <td>2015</td>
                    <td>Zahir Pau</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">360</span>
                        <div>
                          <Progress
                            max="1000"
                            value="360"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Renault</td>
                    <td>Kwid</td>
                    <td>2023</td>
                    <td>Lakshmi Mistry</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">728</span>
                        <div>
                          <Progress
                            max="1000"
                            value="728"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Mahindra & Mahindra</td>
                    <td>XUV500</td>
                    <td>2021</td>
                    <td>Siddharth Dodiya</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">428</span>
                        <div>
                          <Progress
                            max="1000"
                            value="428"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Maruti Swift</td>
                    <td>Desire</td>
                    <td>2018</td>
                    <td>Mohan Borah</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">920</span>
                        <div>
                          <Progress
                            max="1000"
                            value="920"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><Media className="align-items-center">
                      <a
                        className="avatar rounded-circle"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                    </Media></th>
                    <td>Renault Kwid</td>
                    <td>Kwid</td>
                    <td>2021</td>
                    <td>Kamlesh Naik</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">436</span>
                        <div>
                          <Progress
                            max="1000"
                            value="436"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default CarManagement;
