import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Card,CardContent,Chip,Grid,IconButton,Table,TableBody,TableCell,TableContainer,TableHead, TableRow,
} from '@mui/material';

const PatientList = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [patients, setPatients] = useState([
    {
        id: 1,
        practice:'Tested',
        name: 'John Doe',
        dob: '1990-01-15',
        phone: '123-456-7890',
        addedDate: '2023-10-01',
        serviceProvider: 'HealthCare Inc.',
        imeiNo: '12345',
        status: 'active',
        
      },
      {
        id: 2,
        practice:'Tested',
        name: 'Jane Smith',
        dob: '1985-05-20',
        phone: '987-654-3210',
        addedDate: '2023-09-15',
        serviceProvider: 'MediCare Corp.',
        imeiNo: '54321',
        status: 'inactive',
      },
      {
          id: 3,
          name: 'Jane Smith',
          practice:'Tested',
          dob: '1985-05-20',
          phone: '987-654-3210',
          addedDate: '2023-09-15',
          serviceProvider: 'MediCare Corp.',
          imeiNo: '54321',
          status: 'inactive',
        },
        {
          id: 4,
          name: 'Jane Smith',
          practice:'Tested',
          dob: '1985-05-20',
          phone: '987-654-3210',
          addedDate: '2023-09-15',
          serviceProvider: 'MediCare Corp.',
          imeiNo: '54321',
          status: 'active',
        },
        {
          id: 5,
          name: 'Jane Smith',
          practice:'Tested',
          dob: '1985-05-20',
          phone: '987-654-3210',
          addedDate: '2023-09-15',
          serviceProvider: 'MediCare Corp.',
          imeiNo: '54321',
          status: 'inactive',
        },
        {
          id: 6,
          name: 'Jane Smith',
          practice:'Tested',
          dob: '1985-05-20',
          phone: '987-654-3210',
          addedDate: '2023-09-15',
          serviceProvider: 'MediCare Corp.',
          imeiNo: '54321',
          status: 'active',
        },
        {
          id: 7,
          name: 'Jane Smith',
          practice:'Tested',
          dob: '1985-05-20',
          phone: '987-654-3210',
          addedDate: '2023-09-15',
          serviceProvider: 'MediCare Corp.',
          imeiNo: '54321',
          status: 'inactive',
        },
        {
          id: 8,
          name: 'Jane Smith',
          practice:'Tested',
          dob: '1985-05-20',
          phone: '987-654-3210',
          addedDate: '2023-09-15',
          serviceProvider: 'MediCare Corp.',
          imeiNo: '54321000',
          status: 'active',
        },
  ]);


  const [archive, setArchive] = useState([]);
   // Store deleted patients here
  const [activeCount, setActiveCount] = useState(0);
  const [nonActiveCount, setNonActiveCount] = useState(0);
  const [archiveCount, setArchiveCount] = useState(0);
  const [allCount, setAllCount] = useState(0);


    // Function to calculate the count of archived patients
    const calculateArchiveCount = () => {
        const archivePatients = archive.filter((patient) => patient.status === 'archive');
        setArchiveCount(archivePatients.length);
      };


  // Update counts when patients or activeFilter change
  useEffect(() => {
    const activePatients = patients.filter((patient) => patient.status === 'active');
    const nonActivePatients = patients.filter((patient) => patient.status === 'inactive');
    
    setActiveCount(activePatients.length);
    setNonActiveCount(nonActivePatients.length);
    setAllCount(patients.length);
    calculateArchiveCount();
}, [patients, activeFilter, archive]);

const handleDelete = (patientId) => {
    // Find the deleted patient
    const deletedPatient = patients.find((patient) => patient.id === patientId);
    if (deletedPatient) {
      // Update the addedDate to the current date
      deletedPatient.addedDate = new Date().toISOString().slice(0, 10);
      // Add the deleted patient to the archive with the updated addedDate
      setArchive([...archive, { ...deletedPatient, status: 'archive' }]);
    }
    // Remove the patient from the main list
    const updatedPatients = patients.filter((patient) => patient.id !== patientId);
    setPatients(updatedPatients);
  };

  

  const filteredPatients =
    activeFilter === 'active'
      ? patients.filter((patient) => patient.status === 'active')
      : activeFilter === 'non-active'
      ? patients.filter((patient) => patient.status === 'inactive')
      : activeFilter === 'archive'
      ? archive // Display archived patients when the archive filter is active
      : activeFilter === 'all'
      ? patients
      : [];


  const isArchiveFilterActive = activeFilter === 'archive'; // Check if archive filter is active
  const isActiveFilterActive = activeFilter === 'active'; // Check if active filter is active
  const isNonActiveFilterActive = activeFilter === 'non-active';
  const isAllFilterActive = activeFilter === 'all';

  return (
    <Card style={{ border: '1px solid dodgerblue', marginTop: '70px', marginLeft: '70px', width: '90%' }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TableContainer style={{ height: '200px', width: '70%' }}>
            <Table id="table1" style={{ borderSpacing: '0 5px' }} sx={{ minWidth: 600 }} size="small">
              <TableHead>
                <TableRow style={{ background: '#01619B' }}>
                  <TableCell
                    colSpan={2}
                    align="center"
                    onClick={() => setActiveFilter('active')}
                    style={{ cursor: 'pointer', color: 'white' }}
                  >
                  Active
                  </TableCell>
                  <TableCell
                    colSpan={2}
                    align="center"
                    onClick={() => setActiveFilter('non-active')}
                    style={{ cursor: 'pointer', color: 'white' }}
                  >
            Inactive 
                  </TableCell>
                  <TableCell
                    colSpan={2}
                    align="center"
                    onClick={() => setActiveFilter('archive')}
                    style={{ cursor: 'pointer', color: 'white' }}
                  >
                  Archive
                  </TableCell>
                  <TableCell
                    colSpan={2}
                    align="center"
                    onClick={() => setActiveFilter('all')}
                    style={{ cursor: 'pointer', color: 'white' }}
                  >
                    Patient Added 
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
              <TableCell colSpan={2} align="center">
                {isActiveFilterActive ? activeCount : null}
              </TableCell>
              <TableCell colSpan={2} align="center">
                {isNonActiveFilterActive ? nonActiveCount : null}
              </TableCell>
              <TableCell colSpan={2} align="center">
                {isArchiveFilterActive ? archiveCount : null}
              </TableCell>
              <TableCell colSpan={2} align="center">
              {isAllFilterActive ? allCount : null}
              </TableCell>
            </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TableContainer style={{ height: '300px', paddingLeft: '20px', width: '100%' }}>
              <Table style={{ borderSpacing: '0 5px' }} sx={{ minWidth: 600 }} size="small">
                <TableHead>
                  <TableRow style={{background:'#01619B'}}>
                  <TableCell  style={{ color: 'white' }}>Practice</TableCell>
                    <TableCell  style={{ color: 'white' }}>Name</TableCell>
                    <TableCell   style={{ color: 'white' }}>Date of Birth</TableCell>
                    <TableCell style={{ color: 'white' }}>Phone</TableCell>
                    <TableCell style={{ color: 'white' }}> {isArchiveFilterActive
                        ? 'Archived Date'
                        : isActiveFilterActive
                        ? 'Active Date'
                        : isNonActiveFilterActive
                        ? 'Inactive Date'
                        : 'Added Date'}</TableCell>
                    <TableCell style={{ color: 'white' }}>Service Provider</TableCell>
                    <TableCell style={{ color: 'white' }}>IMEI NO</TableCell>
                    <TableCell style={{ color: 'white' }}>Status</TableCell>
                    <TableCell style={{ color: 'white' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredPatients.map((patient) => (
                    <TableRow key={patient.id}>
                    <TableCell>{patient.practice}</TableCell>
                      <TableCell>{patient.name}</TableCell>
                      <TableCell>{patient.dob}</TableCell>
                      <TableCell>{patient.phone}</TableCell>
                     <TableCell>
  {patient.status === 'archive'
    ? new Date(patient.addedDate).toLocaleDateString()
    : patient.addedDate}
</TableCell>

                      <TableCell>{patient.serviceProvider}</TableCell>
                      <TableCell>{patient.imeiNo}</TableCell>
                      <TableCell>
                        <Chip
                          label={patient.status}
                          color={patient.status === 'active' ? 'primary' : 'secondary'}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton
                          color="secondary"
                          aria-label="Delete Patient"
                          onClick={() => handleDelete(patient.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PatientList;