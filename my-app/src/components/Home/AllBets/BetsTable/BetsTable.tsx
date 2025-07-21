import React from "react";
import { Table, Grid } from "antd";
import {
  EccpressIcon,
  HideIcon,
  ThetherIcon,
} from "../../../../../public/assets/svg/Icons";

const { useBreakpoint } = Grid;

interface BetsTableProps {
  className?: string;
}

const data = Array(10)
  .fill(null)
  .map((_, index) => ({
    key: index,
    event: "Экспресс (2)",
    user: "Скрытый",
    time: "13:55",
    odds: "5,16",
    amount: "₴260.000000...",
  }));

const allColumns = [
  {
    title: "Event",
    dataIndex: "event",
    key: "event",
    render: (text: string) => (
      <div className="flex items-center gap-[8px]">
        <EccpressIcon />
        <span className="text-white text-[14px] font-medium">{text}</span>
      </div>
    ),
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
    render: (text: string) => (
      <div className="flex items-center gap-[8px]">
        <HideIcon />
        <span className="text-white text-[14px] font-medium">{text}</span>
      </div>
    ),
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    render: (text: string) => (
      <span className="text-white text-[14px] font-medium">{text}</span>
    ),
  },
  {
    title: "Odds",
    dataIndex: "odds",
    key: "odds",
    render: (text: string) => (
      <span className="text-white text-[14px] font-medium">{text}</span>
    ),
  },
  {
    title: "Bet Amount",
    dataIndex: "amount",
    key: "amount",
    align: "right",
    render: (text: string) => (
      <div className="flex items-center gap-[8px] justify-end">
        <span className="text-white text-[14px] font-medium">{text}</span>
        <ThetherIcon />
      </div>
    ),
  },
];

export const BetsTable: React.FC<BetsTableProps> = ({ className }) => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const columns = isMobile
    ? [allColumns[0], allColumns[4]] // Event + Bet Amount
    : allColumns;

  return (
    <div className={`${className} w-[358px] lg:w-[1280px] overflow-x-auto`}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered={false}
        rowClassName={(_, index) =>
          index % 2 === 1 ? "bg-[#202327]" : "bg-[#0F1112]"
        }
        className="custom-ant-table"
      />
    </div>
  );
};
