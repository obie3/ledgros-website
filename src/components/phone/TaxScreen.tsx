import { StatusBar } from './StatusBar';
import { Tabs } from './Tabs';
import s from './screens.module.css';

interface BandProps {
  range: string;
  pct: string;
  fill: number;
  dim?: boolean;
}

function Band({ range, pct, fill, dim = false }: BandProps) {
  return (
    <div className={s.s4Band}>
      <div className={s.lbl}>
        <span style={dim ? { color: 'var(--text-2)' } : undefined}>{range}</span>
        <span className={`${s.pct} ${dim ? s.pctDim : ''}`}>{pct}</span>
      </div>
      <div className={s.pb}>
        <i
          style={{
            width: `${fill}%`,
            background: dim ? 'rgba(255,255,255,0.06)' : 'var(--primary)',
          }}
        />
      </div>
    </div>
  );
}

function Relief({ name }: { name: string }) {
  return (
    <div className={s.s4Relief}>
      <div className={s.l}>
        <b>{name}</b>
        <small>not enrolled</small>
      </div>
      <div className={s.r}>—</div>
    </div>
  );
}

export function TaxScreen() {
  return (
    <>
      <StatusBar />
      <div className={s.s4Title}>Tax Estimator</div>
      <div className={s.s4Sub}>1 Jan 2026 – 31 Dec 2026 · Nigeria</div>

      <div className={s.s4Section}>Reliefs Applied</div>
      <div className={s.s4Card}>
        <Relief name="Pension" />
        <Relief name="NHF" />
        <Relief name="Rent Relief" />
      </div>

      <div className={s.s4Section}>Tax Bands · Nigeria 2026</div>
      <div className={s.s4Card}>
        <Band range="Up to ₦800.0k"     pct="0%"  fill={100} />
        <Band range="₦800.0k – ₦3.0M"   pct="15%" fill={100} />
        <Band range="₦3.0M – ₦12.0M"    pct="18%" fill={35} />
        <Band range="₦12.0M – ₦25.0M"   pct="21%" fill={12} dim />
        <Band range="₦25.0M – ₦50.0M"   pct="23%" fill={6}  dim />
        <Band range="Above ₦50.0M"      pct="25%" fill={3}  dim />
      </div>

      <div className={s.spacer} />
      <Tabs active="tax" />
    </>
  );
}
