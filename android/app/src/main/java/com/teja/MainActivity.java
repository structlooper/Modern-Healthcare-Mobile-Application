package com.teja;

import com.facebook.react.ReactActivity;
import com.faizal.OtpVerify.RNOtpVerifyPackage;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
      new RNOtpVerifyPackage();

    return "Teja";
  }
}
