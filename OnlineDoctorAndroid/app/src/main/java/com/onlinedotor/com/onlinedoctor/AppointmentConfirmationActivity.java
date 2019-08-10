package com.onlinedotor.com.onlinedoctor;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

public class AppointmentConfirmationActivity extends AppCompatActivity {
    private String time_slot;

    private static final String TAG = "AppointmentConfirmationActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_appointment_confirmation);

        Bundle recdData = getIntent().getExtras();
        time_slot = recdData.getString("ClickedProviderTimeSlot");

        Log.d(TAG, "Value: " + time_slot );
    }
}
