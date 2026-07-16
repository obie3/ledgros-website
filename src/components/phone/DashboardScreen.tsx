import { StatusBar } from './StatusBar';
import s from './screens.module.css';

export function DashboardScreen() {
  return (
    <>
      <StatusBar />

      <div className={s.s1Head}>
        <div className={s.s1Brand}>
          <b>Zakios</b>
          <small>FINANCIAL OS</small>
        </div>
        <div className={s.s1Actions}>
          <div className={s.s1Avatar}>E</div>
          <div className={s.s1Cog}>⚙</div>
        </div>
      </div>

      <div className={s.s1Hero}>
        <span className={s.s1Month}>This month</span>
        <div className={s.s1Greet}>Good evening</div>
        <div className={s.s1Name}>Edward</div>
        <div className={s.s1Label}>Net Profit</div>
        <div className={s.s1Amount}>₦0</div>
        <div className={s.s1Split}>
          <div>
            <span className={s.s1Dot} />
            <span className={s.v}>₦0</span>
            Earned
          </div>
          <div className={s.divider}>|</div>
          <div>
            <span className={`${s.s1Dot} ${s.s1DotR}`} />
            <span className={s.v}>₦0</span>
            Spent
          </div>
        </div>
        <div className={s.s1Bar} />
        <div className={s.s1Cap}>0% of income spent</div>
      </div>

      <div className={s.s1Grid}>
        <div className={s.s1Cell}>
          <div className={s.lbl}>Income (Month)</div>
          <div className={s.val}>₦0</div>
          <div className={s.sub}>This month</div>
        </div>
        <div className={`${s.s1Cell} ${s.s1CellR}`}>
          <div className={s.lbl}>Expenses (Month)</div>
          <div className={s.val} style={{ color: 'var(--expense)' }}>₦0</div>
        </div>
        <div className={`${s.s1Cell} ${s.s1CellR}`}>
          <div className={s.lbl}>Tax Estimate</div>
          <div className={s.val} style={{ color: 'var(--expense)' }}>₦779.3k</div>
          <div className={s.sub}>YTD liability</div>
        </div>
        <div className={s.s1Cell}>
          <div className={s.lbl}>Expenses (YTD)</div>
          <div className={s.val}>₦76.3k</div>
          <div className={s.sub}>Year to date</div>
        </div>
      </div>

      <div className={s.s1Cat}>
        <h5>Spending by Category</h5>
        <div className={s.s1Row}>
          <div className={s.s1RowDot} />
          <div>
            <div className={s.spaceBetween}>
              <span>Equipment...</span>
              <span className={s.pa}>₦43.0k</span>
            </div>
            <div className={s.pb}><i style={{ width: '78%' }} /></div>
          </div>
          <div />
        </div>
        <div className={`${s.s1Row} ${s.s1RowP}`}>
          <div className={`${s.s1RowDot} ${s.s1RowDotP}`} />
          <div>
            <div className={s.spaceBetween}>
              <span>Utilities</span>
              <span className={s.pa}>₦33.3k</span>
            </div>
            <div className={s.pb}><i style={{ width: '60%' }} /></div>
          </div>
          <div />
        </div>
      </div>
    </>
  );
}
