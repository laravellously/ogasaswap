/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ChangeEvent, useState } from "react";
import { format } from "date-fns";
import numeral from "numeral";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Tooltip,
  IconButton,
  Typography,
  useTheme,
  CardContent,
} from "@mui/material";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import Label from "@/components/Label";
import { BSCTestnet, shortenAddress, StoredTransaction } from "@usedapp/core";

interface RecentOrdersTableProps {
  className?: string;
  cryptoOrders: StoredTransaction[];
}

const getStatusLabel = (
  cryptoOrderStatus: boolean | undefined
): JSX.Element => {
  let mapVal;
  if (cryptoOrderStatus) {
    mapVal = {
      text: "Completed",
      color: "success",
    };
  } else {
    mapVal = {
      text: "Failed",
      color: "error",
    };
  }

  const { text, color }: any = mapVal;

  return <Label color={color}>{text}</Label>;
};

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ cryptoOrders }) => {
  const theme = useTheme();

  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );

  return (
    <>
    { cryptoOrders.length > 0 ? (
      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Details</TableCell>
                <TableCell>Transaction</TableCell>
                <TableCell align="right">Token</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cryptoOrders.map((cryptoOrder) => {
                const isCryptoOrderSelected = selectedCryptoOrders.includes(
                  cryptoOrder?.transaction.hash
                );
                return (
                  <TableRow
                    hover
                    key={cryptoOrder?.transaction.nonce}
                    selected={isCryptoOrderSelected}
                  >
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {cryptoOrder?.transactionName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {format(
                          Date.parse(cryptoOrder?.submittedAt.toString()),
                          "MMMM dd yyyy"
                        )}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {shortenAddress(cryptoOrder?.transaction.hash)}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        BNB
                      </Typography>
                    </TableCell>
                    <TableCell align="right">{getStatusLabel(true)}</TableCell>
                    <TableCell align="right">
                      <Tooltip placement="top" title="View on BscScan" arrow>
                        <IconButton
                          sx={{
                            "&:hover": {
                              background: theme.colors.error.lighter,
                            },
                            color: theme.palette.error.main,
                          }}
                          color="inherit"
                          size="small"
                          href={BSCTestnet.getExplorerTransactionLink(
                            cryptoOrder?.transaction.hash
                          )}
                        >
                          <VisibilityTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    ) : (
      <Card>
        <CardContent>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            No data yet
          </Typography>
        </CardContent>
      </Card>
    )}
    </>
  );
};

RecentOrdersTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired,
};

RecentOrdersTable.defaultProps = {
  cryptoOrders: [],
};

export default RecentOrdersTable;
