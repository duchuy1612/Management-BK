import React, { useState } from 'react'
import Landing from './screens/Landing'
// import
// import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './screens/Login'
import StudentRegister from './screens/StudentRegister'
import StudentFees from './screens/StudentFees'
import StudentDetails from './screens/StudentDetails'
import StudentDeepDetails from './screens/StudentDeepDetails'
import StudentAttendance from './screens/StudentAttendance'
import AllStudents from './screens/AllStudents'
import StudentDeepAttendance from './screens/StudentDeepAttendance'
import TeacherSalary from './screens/TeacherSalary'
import StaffSalary from './screens/StaffSalary'
import TeacherRegister from './screens/TeacherRegister'
import AllTeachers from './screens/AllTeachers'
import AllStaffs from './screens/AllStaffs'
import StaffRegister from './screens/StaffRegister'
import IncomeScreen from './screens/IncomeScreen'
import NotFound from './screens/NotFound'

import ExpenseScreen from './screens/ExpenseScreen'
import underConstruction from './components/underConstruction'
import PrivateRoute from '../src/utils/PrivateRoute'
import PublicRoute from '../src/utils/PublicRoute'
// import ExpenseScreen from './screens/ExpenseScreen'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path='/' component={Landing} exact />
          <Route path='/login' component={Login} exact />
          <PrivateRoute path='/student-register' component={StudentRegister} />
          <PrivateRoute path='/student-fee' component={StudentFees} />
          <PublicRoute
            path='/student_details'
            component={StudentDetails}
            exact
          />
          <PublicRoute
            path='/student_details/details/:id'
            component={StudentDeepDetails}
            exact
          />
          {/* <PrivateRoute
            path='/student-attendance'
            component={underConstruction}
            exact
          /> */}
          <PrivateRoute
            path='/teacher_attendance'
            component={underConstruction}
            exact
          />
          <PrivateRoute
            path='/non-teaching_staff_attendance'
            component={underConstruction}
            exact
          />
          <PublicRoute
            path='/student-attendance/:class'
            component={StudentDeepAttendance}
            exact
          />
          <PublicRoute path='/students' component={AllStudents} exact />
          <PrivateRoute
            path='/teacher_salary'
            component={TeacherSalary}
            exact
          />
          <PrivateRoute
            path='/teacher_register'
            component={TeacherRegister}
            exact
          />
          <PrivateRoute path='/teachers' component={AllTeachers} exact />
          <PrivateRoute
            path='/staffs'
            component={AllStaffs}
            exact
          />
          <PrivateRoute
            path='/non-teaching_staff_register'
            component={StaffRegister}
            exact
          />
          <PrivateRoute
            path='/non-teaching_staff_salary'
            component={StaffSalary}
            exact
          />
          <PrivateRoute path='/income' component={IncomeScreen} exact />
          <PrivateRoute path='/salary' component={ExpenseScreen} exact />
          <PublicRoute
            path='/student-attendance'
            component={StudentAttendance}
            exact
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
