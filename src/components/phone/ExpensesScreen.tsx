import { StatusBar } from './StatusBar';
import { Tabs } from './Tabs';
import s from './screens.module.css';

interface RowProps {
  icon: string;
  name: string;
  date: string;
  amt: string;
}

function Row({ icon, name, date, amt }: RowProps) {
  return (
    <div className={s.s2Row}>
      <div className={s.s3Icon}>{icon}</div>
      <div>
        <div className={s.s2Name}>{name}</div>
        <div className={s.s2Date}>• {date}</div>
      </div>
      <div className={s.s3Amt}>{amt}</div>
    </div>
  );
}

export function ExpensesScreen() {
  return (
    <>
      <StatusBar />
      <div className={s.s2Title}>Expenses</div>
      <div className={s.s2Meta}>5 entries</div>

      <Row icon="⚡" name="BuyPower"    date="11 Apr 2026 · Utilities"        amt="₦11.1k" />
      <Row icon="⚡" name="BuyPower"    date="11 Apr 2026 · Utilities"        amt="₦11.1k" />
      <Row icon="⚡" name="BuyPower.ng" date="11 Apr 2026 · Utilities"        amt="₦11.1k" />
      <Row icon="💻" name="Adobe"       date="2 Apr 2026 · Equipment & Tech" amt="₦3.0k" />
      <Row icon="💻" name="Laptop"      date="2 Apr 2026 · Equipment & Tech" amt="₦40.0k" />

      <div className={s.spacer} />
      <div className={s.s3Fabs}>
        <div className={s.s3Scan}>📷 Scan</div>
        <div className={`${s.s2Fab} ${s.s2FabStatic}`}>+ Manual</div>
      </div>
      <Tabs active="expenses" />
    </>
  );
}
