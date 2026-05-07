import { StatusBar } from './StatusBar';
import { Tabs } from './Tabs';
import s from './screens.module.css';

interface RowProps {
  name: string;
  date: string;
  ngn: string;
  usd: string;
}

function Row({ name, date, ngn, usd }: RowProps) {
  return (
    <div className={s.s2Row}>
      <div className={s.s2Icon}>↑</div>
      <div>
        <div className={s.s2Name}>{name}</div>
        <div className={s.s2Date}>{date}</div>
      </div>
      <div className={s.s2Amt}>
        <div className={s.a}>{ngn}</div>
        <div className={s.b}>{usd}</div>
      </div>
    </div>
  );
}

export function IncomeScreen() {
  return (
    <>
      <StatusBar />
      <div className={s.s2Title}>Income</div>
      <div className={s.s2Import}>📎 Import</div>
      <div className={s.s2Meta}>3 entries</div>

      <Row name="Upwork"   date="6 Apr 2026 · $570"   ngn="₦883.5k" usd="$570" />
      <Row name="Upwork"   date="2 Apr 2026 · $25"    ngn="₦38.8k"  usd="$25" />
      <Row name="Payooner" date="2 Apr 2026 · $3,000" ngn="₦4.7M"   usd="$3,000" />

      <div className={s.spacer} />
      <div className={s.s2Fab}>+ Log Income</div>
      <Tabs active="income" />
    </>
  );
}
