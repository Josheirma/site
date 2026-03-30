import styles from '../styles/faq.module.css';

export default function FAQ() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <div className={styles.heading}>
          FAQ
        </div>

        <div className={styles.content}>

          {/* Download & Setup */}
          <div className={styles.section}>
            <div className={`${styles.h2} ${styles.h2Secondary}`}>Download & Installation</div>
            <div className={styles.p1}>
              <div className={styles.strong}>How do I install the app?</div>
              <div className={styles.answer}>Open the downloaded file and follow the prompts.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>The file won't open?</div>
              <div className={styles.answer}>Re-download it and check system security warnings.</div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.h2}>Getting Started</div>
            <div className={styles.p1}>
              <div className={styles.strong}>How do I launch?</div>
              <div className={styles.answer}>Use your system search or double-click the app icon.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>Do I need an account?</div>
              <div className={styles.answer}>Some features may require login.</div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.h2}>Features</div>
            <div className={styles.p1}>
              <div className={styles.strong}>How do I download files?</div>
              <div className={styles.answer}>Use the Download button inside the app.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>Where are files saved?</div>
              <div className={styles.answer}>Usually in your Downloads folder.</div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.h2}>Troubleshooting</div>
            <div className={styles.p1}>
              <div className={styles.strong}>App won't start?</div>
              <div className={styles.answer}>Restart your computer or reinstall.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>Layout looks broken?</div>
              <div className={styles.answer}>Resize the window or restart.</div>
            </div>
          </div>

          {/* Account & Login */}
          <div className={styles.section}>
            <div className={styles.h2}>Creating an Account</div>
            <div className={styles.p1}>
              <div className={styles.strong}>How do I sign up?</div>
              <div className={styles.answer}>Click Sign Up on the homepage and fill in your details.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>Is there an age requirement?</div>
              <div className={styles.answer}>You must be at least 13 years old to create an account.</div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.h2}>Logging In</div>
            <div className={styles.p1}>
              <div className={styles.strong}>I forgot my password.</div>
              <div className={styles.answer}>Click Forgot Password on the login page and follow the reset instructions.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>Can I log in on multiple devices?</div>
              <div className={styles.answer}>Yes, your account works across all your devices simultaneously.</div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.h2}>Managing Your Account</div>
            <div className={styles.p1}>
              <div className={styles.strong}>How do I update my email or password?</div>
              <div className={styles.answer}>Go to Settings and select Account Details to make changes.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>How do I delete my account?</div>
              <div className={styles.answer}>Contact support or visit Settings and select Delete Account.</div>
            </div>
          </div>

          {/* Billing & Payments */}
          <div className={styles.section}>
            <div className={styles.h2}>Plans & Pricing</div>
            <div className={styles.p1}>
              <div className={styles.strong}>What plans are available?</div>
              <div className={styles.answer}>We offer Free, Pro, and Enterprise plans. Visit our pricing page for details.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>Can I try Pro before paying?</div>
              <div className={styles.answer}>Yes, we offer a 14-day free trial with no credit card required.</div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.h2}>Payments</div>
            <div className={styles.p1}>
              <div className={styles.strong}>What payment methods do you accept?</div>
              <div className={styles.answer}>We accept all major credit cards, PayPal, and bank transfers.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>When am I charged?</div>
              <div className={styles.answer}>Billing occurs on the same date each month or year depending on your plan.</div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.h2}>Refunds & Cancellations</div>
            <div className={styles.p1}>
              <div className={styles.strong}>Can I cancel anytime?</div>
              <div className={styles.answer}>Yes, you can cancel your subscription at any time from Settings.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>Do you offer refunds?</div>
              <div className={styles.answer}>Refunds are available within 7 days of purchase. Contact support to request one.</div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className={styles.section}>
            <div className={styles.h2}>Your Data</div>
            <div className={styles.p1}>
              <div className={styles.strong}>What data do you collect?</div>
              <div className={styles.answer}>We collect only what is necessary to provide the service. See our Privacy Policy for details.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>Is my data sold to third parties?</div>
              <div className={styles.answer}>No, we never sell your personal data to anyone.</div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.h2}>Security</div>
            <div className={styles.p1}>
              <div className={styles.strong}>How is my data protected?</div>
              <div className={styles.answer}>All data is encrypted in transit and at rest using industry-standard protocols.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>Do you support two-factor authentication?</div>
              <div className={styles.answer}>Yes, you can enable 2FA in Settings under Security.</div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.h2}>Cookies & Tracking</div>
            <div className={styles.p1}>
              <div className={styles.strong}>Do you use cookies?</div>
              <div className={styles.answer}>Yes, we use essential cookies to keep you logged in and improve your experience.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>Can I opt out of tracking?</div>
              <div className={styles.answer}>Yes, visit Cookie Settings in your account preferences to manage your choices.</div>
            </div>
          </div>

          {/* Contact & Support */}
          <div className={styles.section}>
            <div className={styles.h2}>Getting Help</div>
            <div className={styles.p1}>
              <div className={styles.strong}>How do I contact support?</div>
              <div className={styles.answer}>Use the Contact Us page or email support@example.com.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>What are your support hours?</div>
              <div className={styles.answer}>Our team is available Monday–Friday, 9am–6pm EST.</div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.h2}>Response Times</div>
            <div className={styles.p1}>
              <div className={styles.strong}>How quickly will I get a reply?</div>
              <div className={styles.answer}>We aim to respond within 1 business day.</div>
            </div>
            <div className={styles.p2}>
              <div className={styles.strong}>Is there live chat?</div>
              <div className={styles.answer}>Live chat is available for Pro and Enterprise users.</div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.h2}>Community & Resources</div>
            <div className={styles.p1}>
              <div className={styles.strong}>Is there a community forum?</div>
              <div className={styles.answer}>Yes, visit our community page to ask questions and share tips.</div>
            </div>
            <div className={styles.lastP}>
              <div className={styles.strong}>Where can I find guides and tutorials?</div>
              <div className={styles.answerLast}>Check our Help Center for step-by-step guides and video tutorials.</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}