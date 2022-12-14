import React, { useEffect, useState, useRef } from "react";
import {
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TableContainer,
  FormControl,
  NativeSelect,
  TextField,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import env from "react-dotenv";
import ErrorModal from "./ErrorModal";

const bankData = [
  {
    value: "NONE",
    title: "Not selected",
  },
  {
    value: "VIB",
    title: "VIB",
  },
  {
    value: "VPB",
    title: "VPBANK(VPB)",
  },
  {
    value: "BIDV",
    title: "BIDV",
  },
  {
    value: "CTG",
    title: "VIETINBANK(CTG)",
  },
  {
    value: "SHB",
    title: "SHB",
  },
  {
    value: "ABBANK",
    title: "ABBANK",
  },
  {
    value: "AGRIB",
    title: "AGRIB",
  },
  {
    value: "VCB",
    title: "VCB",
  },
  {
    value: "TCB",
    title: "TECHCOMBANK(TCB)",
  },
  {
    value: "ACB",
    title: "ACB",
  },
  {
    value: "SCB",
    title: "SCB",
  },
  {
    value: "MB",
    title: "MB",
  },
  {
    value: "EIB",
    title: "EXIMBANK(EIB)",
  },
  {
    value: "STB",
    title: "SACOMBANK",
  },
  {
    value: "DONG",
    title: "DONG A BANK",
  },
  {
    value: "GPBANK",
    title: "GPBANK",
  },
  {
    value: "SAIGONBANK",
    title: "SAIGONBANK",
  },
  {
    value: "PGBANK",
    title: "PGBANK",
  },
  {
    value: "OCEANBANK",
    title: "OCEANBANK",
  },
  {
    value: "NAM",
    title: "NAM A BANK",
  },
  {
    value: "TPBANK",
    title: "TPBANK",
  },
  {
    value: "HDBANK",
    title: "HD BANK",
  },
  {
    value: "VIETABANK",
    title: "VIET A BANK",
  },
  {
    value: "OCB",
    title: "OCB",
  },
  {
    value: "SEABANK",
    title: "SEABANK",
  },
  {
    value: "LPB",
    title: "LienVietPostBank(LPB)",
  },
  {
    value: "MSB",
    title: "MARITIMEBANK(MSB)",
  },
  {
    value: "VIETBANK",
    title: "VIETBANK",
  },
  {
    value: "BVB",
    title: "BVB",
  },
  {
    value: "CAKE",
    title: "CAKE",
  },
  {
    value: "CBBANK",
    title: "CBBANK",
  },
  {
    value: "CIMB",
    title: "CIMB",
  },
  {
    value: "DSC",
    title: "DSC",
  },
  {
    value: "HSBC",
    title: "HSBC",
  },
  {
    value: "IVB",
    title: "IVB",
  },
  {
    value: "KIENLONGBANK",
    title: "KIEN LONG BANK",
  },
  {
    value: "NCB",
    title: "NCB",
  },
  {
    value: "PBVN",
    title: "PBVN",
  },
  {
    value: "PVCOMBANK",
    title: "PVCOMBANK",
  },
  {
    value: "VIETCAPITALBANK",
    title: "VIET CAPITAL BANK",
  },
  {
    value: "VRB",
    title: "VRB",
  },
  {
    value: "WOORI",
    title: "WOORI",
  },
  {
    value: "USDT",
    title: "USDT TRC20",
  },
];

const AccountInfoTable = (props) => {
  const [bank, setBank] = useState("");
  const [nickName, setNickName] = useState("");
  const [account, setAccount] = useState("");
  const [accountName, setAccountName] = useState("");
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const tableRef = useRef(null);

  useEffect(() => {
    fetchAccountInfos();
  }, []);

  const handleModalOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchAccountInfos = async () => {
    const accountDatas = await axios.get(
      `${env.API_URL}/accountInfo/datas/${localStorage.getItem("dibao_userId")}`
    );
    setRows(accountDatas.data);
  };

  const handleCreateAccountData = (e) => {
    e.preventDefault();
    if (!bank || !nickName || !account || !accountName) {
      setValue("Plz fill out all fields");
      handleModalOpen();
      return;
    }

    const createDatas = {
      type: bank,
      nickName: nickName,
      account: account,
      accountName: accountName,
      userId: Number(localStorage.getItem("dibao_userId")),
    };

    axios
      .post(`${env.API_URL}/accountInfo/create`, {
        data: createDatas,
      })
      .then((datas) => {
        console.log(datas.data);
      });
  };

  const handleDeleteAccountData = (e, idx) => {
    e.preventDefault();
    axios.delete(`${env.API_URL}/accountInfo/delete/${idx}`).then((data) => {});
  };

  const handleBank = (event) => {
    setBank(event.target.value);
  };
  const handleNickName = (event) => {
    setNickName(event.target.value);
  };
  const handleAccount = (event) => {
    setAccount(event.target.value);
  };
  const handleAccountName = (event) => {
    setAccountName(event.target.value);
  };

  return (
    <div className="withdrawal-table">
      <Paper sx={{ overflow: "hidden" }}>
        <TableContainer ref={tableRef}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Account number</TableCell>
                <TableCell align="center">Transaction Type</TableCell>
                <TableCell align="center">Nick Name</TableCell>
                <TableCell align="center">Account</TableCell>
                <TableCell align="center">Account Name</TableCell>
                <TableCell align="center">Creation time</TableCell>
                <TableCell align="center">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">Create</TableCell>
                <TableCell align="center">
                  <FormControl fullWidth>
                    <NativeSelect
                      //   defaultValue={"NONE"}
                      value={bank}
                      onChange={handleBank}
                    >
                      {bankData.map((data, index) => (
                        <option key={index} value={data.value}>
                          {data.title}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </TableCell>
                <TableCell align="center">
                  <TextField
                    hiddenLabel
                    id="nick-name"
                    variant="filled"
                    size="small"
                    placeholder="Length is 20 code"
                    onChange={handleNickName}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    hiddenLabel
                    id="account"
                    variant="filled"
                    size="small"
                    placeholder="Length is 40 code"
                    onChange={handleAccount}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    hiddenLabel
                    id="account-name"
                    variant="filled"
                    size="small"
                    placeholder="Length is 40 code"
                    onChange={handleAccountName}
                  />
                </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">
                  <Button
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={(e) => handleCreateAccountData(e)}
                  >
                    Add
                  </Button>
                </TableCell>
              </TableRow>
              {rows.map((item, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center">{item.type}</TableCell>
                  <TableCell align="center">{item.nickName}</TableCell>
                  <TableCell align="center">{item.account}</TableCell>
                  <TableCell align="center">{item.accountName}</TableCell>
                  <TableCell align="center">{item.created_at}</TableCell>
                  <TableCell align="center">
                    <Button
                      sx={styles.closeBtn}
                      onClick={(e) => handleDeleteAccountData(e, item.id)}
                    >
                      <CloseIcon sx={styles.closeIcon} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50, 100, 200]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <ErrorModal open={open} handleClose={handleClose} value={value} />
    </div>
  );
};

export default AccountInfoTable;

const styles = {
  closeIcon: {
    color: "white",
  },
  closeBtn: {
    backgroundColor: "#f44336",
    borderRadius: "5px",
    border: "none",
    minWidth: "15px",
    "&:hover": {
      backgroundColor: "#f99306",
    },
  },
};
