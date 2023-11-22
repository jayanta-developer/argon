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
  Button,
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

const UserManagement = () => {
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
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">User Management</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="/add-new-user"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Add new user
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">user name</th>
                    <th scope="col">email</th>
                    <th scope="col">join date</th>
                    <th scope="col">cars added</th>
                    <th scope="col">notecard generated</th>
                    <th scope="col">status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      Rajendra Sheth
                    </th>
                    <td>r.sheth@gmail.com</td>
                    <td>
                      15/12/2021
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">50</span>
                        <div>
                          <Progress
                            max="100"
                            value="50"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <label className="custom-toggle">
                        <input defaultChecked type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
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
                    <th scope="row">
                      Akshay Sane
                    </th>
                    <td>ydoctor@rajan.org</td>
                    <td>
                      10/01/2019
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">90</span>
                        <div>
                          <Progress
                            max="100"
                            value="90"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <Progress
                            max="100"
                            value="100"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <label className="custom-toggle">
                        <input defaultChecked type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
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
                    <th scope="row">
                      Lakshmi Mistry
                    </th>
                    <td>arora.sameedha@borde.in</td>
                    <td>
                      11/10/2022
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">80</span>
                        <div>
                          <Progress
                            max="100"
                            value="80"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">72</span>
                        <div>
                          <Progress
                            max="100"
                            value="72"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <label className="custom-toggle">
                        <input defaultChecked type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
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
                    <th scope="row">
                      Vikrant Sarin
                    </th>
                    <td>chaudhary.madhavi@bajaj.com</td>
                    <td>
                      15/05/2021
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">95</span>
                        <div>
                          <Progress
                            max="100"
                            value="95"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">40</span>
                        <div>
                          <Progress
                            max="100"
                            value="40"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <label className="custom-toggle">
                        <input type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
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
                    <th scope="row">
                      Siddharth Dodiya
                    </th>
                    <td>borah.bharat@yahoo.co.in</td>
                    <td>
                      05/05/2018
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">50</span>
                        <div>
                          <Progress
                            max="100"
                            value="50"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">80</span>
                        <div>
                          <Progress
                            max="100"
                            value="80"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <label className="custom-toggle">
                        <input defaultChecked type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
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
                    <th scope="row">
                      Mohan Borah
                    </th>
                    <td>lachman.narmada@yahoo.com</td>
                    <td>
                      15/01/2021
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">95</span>
                        <div>
                          <Progress
                            max="100"
                            value="95"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <label className="custom-toggle">
                        <input defaultChecked type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
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
                    <th scope="row">
                      Kamlesh Naik
                    </th>
                    <td>shanti.oommen@contractor.ac.in</td>
                    <td>
                      15/12/2021
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">45</span>
                        <div>
                          <Progress
                            max="100"
                            value="45"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60</span>
                        <div>
                          <Progress
                            max="100"
                            value="75"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <label className="custom-toggle">
                        <input defaultChecked type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
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
                    <th scope="row">
                      Ghanshyam Deol
                    </th>
                    <td>anjana.virk@yahoo.com</td>
                    <td>
                      15/12/2021
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">95</span>
                        <div>
                          <Progress
                            max="100"
                            value="95"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <label className="custom-toggle">
                        <input defaultChecked type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
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
                    <th scope="row">
                      Jawahar Rastogi
                    </th>
                    <td>dalia.anees@gmail.com</td>
                    <td>
                      05/06/2022
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">65</span>
                        <div>
                          <Progress
                            max="100"
                            value="65"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">50</span>
                        <div>
                          <Progress
                            max="100"
                            value="50"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <label className="custom-toggle">
                        <input defaultChecked type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
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
                    <th scope="row">
                      Usman Kata
                    </th>
                    <td>nawab.mogul@george.com</td>
                    <td>
                      15/12/2021
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">75</span>
                        <div>
                          <Progress
                            max="100"
                            value="75"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <label className="custom-toggle">
                        <input defaultChecked type="checkbox" />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
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

export default UserManagement;
