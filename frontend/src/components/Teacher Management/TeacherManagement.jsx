import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "../../utils/icons";
import Navbar from "../Common/Navbar";
import Header from "../Common/Header";
import { useSidebar } from "../../context/SidebarContext";
import axios from "axios";
import Loading from "../Common/Loading";
import ErrorBox from "../Common/ErrorBox";

function TeacherManagement() {
  const { isSidebarVisible, toggleSidebar } = useSidebar();
  const [errorMessage, setErrorMessage] = useState([{ isActive: false }]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [teacherData, setTeacherData] = useState([
    {
      TeacherID: 1,
      TeacherName: "Dr. John Doe",
      Subjects: ["Math", "Physics"],
      Department: "CSE",
      Experience: 10,
      Path: "/teacher-management/john-doe",
    },
    {
      TeacherID: 2,
      TeacherName: "Prof. Jane Smith",
      Subjects: ["Chemistry", "Biology"],
      Department: "Biotech",
      Experience: 8,
      Path: "/teacher-management/jane-smith",
    },
    {
      TeacherID: 3,
      TeacherName: "Dr. Robert Brown",
      Subjects: ["Mechanical Engineering", "Mathematics"],
      Department: "ME",
      Experience: 12,
      Path: "/teacher-management/robert-brown",
    },
    {
      TeacherID: 4,
      TeacherName: "Dr. Emily Davis",
      Subjects: ["English", "History"],
      Department: "Humanities",
      Experience: 6,
      Path: "/teacher-management/emily-davis",
    },
    {
      TeacherID: 5,
      TeacherName: "Prof. Michael Wilson",
      Subjects: ["Computer Science", "Algorithms"],
      Department: "CSE",
      Experience: 15,
      Path: "/teacher-management/michael-wilson",
    },
    {
      TeacherID: 6,
      TeacherName: "Dr. Sophia Johnson",
      Subjects: ["Electrical Engineering", "Circuits"],
      Department: "EEE",
      Experience: 9,
      Path: "/teacher-management/sophia-johnson",
    },
    {
      TeacherID: 7,
      TeacherName: "Mr. Liam Martinez",
      Subjects: ["Mechanical Engineering", "Robotics"],
      Department: "ME",
      Experience: 7,
      Path: "/teacher-management/liam-martinez",
    },
    {
      TeacherID: 8,
      TeacherName: "Ms. Olivia Lee",
      Subjects: ["Civil Engineering", "Structural Analysis"],
      Department: "Civil",
      Experience: 11,
      Path: "/teacher-management/olivia-lee",
    },
    {
      TeacherID: 9,
      TeacherName: "Prof. Noah Clark",
      Subjects: ["Mathematics", "Statistics"],
      Department: "CSE",
      Experience: 5,
      Path: "/teacher-management/noah-clark",
    },
    {
      TeacherID: 10,
      TeacherName: "Dr. Ava Harris",
      Subjects: ["Physics", "Astronomy"],
      Department: "CSE",
      Experience: 13,
      Path: "/teacher-management/ava-harris",
    },
    {
      TeacherID: 11,
      TeacherName: "Dr. James White",
      Subjects: ["Economics", "Accounting"],
      Department: "Commerce",
      Experience: 10,
      Path: "/teacher-management/james-white",
    },
    {
      TeacherID: 12,
      TeacherName: "Prof. Maria Garcia",
      Subjects: ["Spanish", "Literature"],
      Department: "Languages",
      Experience: 20,
      Path: "/teacher-management/maria-garcia",
    },
    {
      TeacherID: 13,
      TeacherName: "Mr. David Martinez",
      Subjects: ["History", "Political Science"],
      Department: "Humanities",
      Experience: 6,
      Path: "/teacher-management/david-martinez",
    },
    {
      TeacherID: 14,
      TeacherName: "Dr. Anna Taylor",
      Subjects: ["Psychology", "Sociology"],
      Department: "Social Sciences",
      Experience: 8,
      Path: "/teacher-management/anna-taylor",
    },
    {
      TeacherID: 15,
      TeacherName: "Prof. Robert King",
      Subjects: ["Philosophy", "Ethics"],
      Department: "Humanities",
      Experience: 18,
      Path: "/teacher-management/robert-king",
    },
  ]);
  const [distinctBranches, setDistinctBranches] = useState([]);
  const [distinctSubjects, setDistinctSubjects] = useState([]);
  const [filters, setFilters] = useState({
    searchQuery: "",
    selectedBranch: "",
    selectedSubject: "",
  });

  const handleChildError = (type, message) => {
    setErrorMessage(() => [
      {
        id: Math.random(),
        type: type,
        message: message,
        isActive: true,
      },
    ]);
  };

  const fetchDistinctBranches = async () => {
    // try {
    //   const response = await axios.get(
    //     `${import.meta.env.VITE_API_BASE_URL}teacher/distinct-branches`
    //   );
    //   // console.log("Distint branches:", response);
    //   const data = response.data;
    //   setDistinctBranches(data.row);
    // } catch (error) {
    //   // console.error(
    //   //   "Error fetching distinct branches:",
    //   //   error.response?.data || error.message
    //   // );
    //   handleChildError(
    //     "error",
    //     error.response?.data.error || "No records found"
    //   );
    // }
  };

  const fetchDistinctSubjects = async () => {
    // try {
    //   const response = await axios.get(
    //     `${import.meta.env.VITE_API_BASE_URL}teacher/distinct-subjects`
    //   );
    //   // console.log("Distint subjects:", response);
    //   const data = response.data;
    //   setDistinctSubjects(data.row);
    // } catch (error) {
    //   console.error(
    //     "Error fetching distinct subjects:",
    //     error.response?.data || error.message
    //   );
    //   handleChildError(
    //     "error",
    //     error.response?.data.error || "No records found"
    //   );
    // }
  };

  const fetchTeachersFilter = async () => {
    // try {
    //   const response = await axios.get(
    //     `${import.meta.env.VITE_API_BASE_URL}teacher/get-teachers`,
    //     {
    //       params: filters,
    //     }
    //   );

    //   if (response.data.row && response.data.row.length > 0) {
    //     setTeacherData(response.data.row);
    //   }
    // } catch (error) {
    //   // console.error(
    //   //   "Error fetching distinct subjects:",
    //   //   error.response?.data.error || error.message
    //   // );
    //   setTeacherData([]);
    //   handleChildError(
    //     "error",
    //     error.response?.data.error || "No records found"
    //   );
    // }
  };

  const updateFilter = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    fetchDistinctBranches();
    fetchDistinctSubjects();
  }, []);

  useEffect(() => {
    fetchTeachersFilter();
  }, [filters]);

  useEffect(() => {
    if (state && state.error) {
      handleChildError(state.error, state.message);
      navigate("", { replace: true, state: null });
    }
  }, [state]);
  return (
    <>
      <Header toggleSidebar={toggleSidebar} />

      <Navbar isSidebarVisible={isSidebarVisible} />
      <div
        className={`content-wrapper ${isSidebarVisible ? "" : "full-width"}`}
      >
        <main>
          <section className="page-header">
            <div className="header-title">
              <h1>Teacher Management</h1>
              <button
                onClick={() => {
                  navigate("/teacher-management/add-teacher");
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add Teacher
              </button>
            </div>
            {/* Breadcrumb */}
            <div className="breadcrumb">
              <Link to="/dashboard">Home</Link>

              <span>
                <IoIosArrowForward className="breadcrumb-icon " />
              </span>
              <span className="current-breadcrumb">Teacher Management</span>
            </div>
            <div className="flex justify-between gap-4 my-4">
              <input
                type="text"
                name="searchQuery"
                value={filters.searchQuery}
                onChange={updateFilter}
                placeholder="Search by name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/3"
              />
              <select
                name="selectedBranch"
                value={filters.selectedBranch}
                onChange={updateFilter}
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/3"
              >
                <option value="">Select Branch</option>
                {distinctBranches.map((branch, idx) => (
                  <option key={idx} value={branch.Department}>
                    {branch.Department}
                  </option>
                ))}
              </select>
              <select
                name="selectedSubject"
                value={filters.selectedSubject}
                onChange={updateFilter}
                className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/3"
              >
                <option value="">Select Subject</option>
                {distinctSubjects.map((subject, idx) => (
                  <option key={idx} value={subject.SubjectName}>
                    {subject.SubjectName}
                  </option>
                ))}
              </select>
              <button
                onClick={() => {
                  setFilters({
                    searchQuery: "",
                    selectedBranch: "",
                    selectedSubject: "",
                  });
                }}
                className="bg-red-500 text-white px-4 py-2 text-nowrap rounded-md hover:bg-red-600"
              >
                Reset
              </button>
            </div>
            {errorMessage[0].isActive &&
              errorMessage.map((errorMessage) => (
                <ErrorBox
                  key={errorMessage.id}
                  type={errorMessage.type}
                  message={errorMessage.message}
                  onClose={() => {
                    setErrorMessage([{ isActive: false }]);
                  }}
                />
              ))}
          </section>

          {teacherData ? (
            <section className="explore-details">
              <div className="explore-header">
                <h2 className="explore-head-title">Teacher Details</h2>
                <p className="explore-head-description">
                  Select your teacher to explore details.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teacherData.map((teacher) => (
                  <div
                    key={teacher.TeacherID}
                    className="bg-white flex justify-between flex-col shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {teacher.TeacherName}
                      </h3>
                      <p className="text-gray-600">
                        Subject: {teacher.Subjects.join(", ")}
                      </p>
                      <p className="text-gray-600">
                        Branch: {teacher.Department}
                      </p>
                      <p className="text-gray-600">
                        Experience: {teacher.Experience} years
                      </p>
                    </div>
                    <button
                      onClick={() => navigate(teacher.Path)}
                      // to={`/teacher-management/${teacher.Path}`}
                      className="mt-4 bg-blue-500 text-white w-full py-2 px-4 rounded hover:bg-blue-600 "
                    >
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <Loading />
          )}
        </main>
      </div>
    </>
  );
}

export default TeacherManagement;
