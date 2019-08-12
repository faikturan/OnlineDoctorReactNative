package com.onlinedotor.com.onlinedoctor;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import com.squareup.picasso.Picasso;

public class AppointmentConfirmationActivity extends AppCompatActivity {
    private String time_slot;
    private String appointment_date;
    private String appointment_firstname;
    private String appointment_lastname;
    private String appointment_title;
    private String appointment_language;
    private String appointment_specialty;
    private String appointment_provider;
    private String appointment_phone;
    private String appointment_email;
    private String appointment_image;
    private String appointment_address1;
    private String appointment_address2;
    private String appointment_city;
    private String appointment_state;
    private String appointment_zipcode;

    DatabaseReference reference;

    private String patient_username;
    private String patient_firstname;
    private String patient_lastname;
    private String patient_firstname_lowercase;
    private String patient_lastname_lowercase;
    private String patient_fullname;
    private String patient_fullname_lowercase;
    private String provider_fullname;
    private String provider_address_line1;
    private String provider_address_line2;
    private String provider_phone_number;
    private String provider_email_address;
    private String status = "confirmed";

    private TextView confirmation_title;
    private TextView booking_date;
    private TextView booking_time;
    private TextView appointment_patient_firstname;
    private TextView appointment_patient_lastname;
    private ImageView appointment_provider_image;
    private TextView appointment_provider_fullname;
    private TextView appointment_provider_phone;
    private TextView appointment_provider_email;
    private TextView appointment_provider_address1;
    private TextView appointment_provider_address2;
    private Button appointment_confirm_btn;
    private ProgressBar progressBar;


    private static final String TAG = "AppointmentConfirmationActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_appointment_confirmation);

        initializeUI();

        Bundle recdData = getIntent().getExtras();
        time_slot = recdData.getString("ClickedProviderTimeSlot");
//        appointment_date = recdData.getString("Appointment_Date");

        SharedPreferences mySharedPreferences = this.getSharedPreferences("MYPREFERENCENAME", Context.MODE_PRIVATE);
        appointment_date = mySharedPreferences.getString("Appointment_Date", "");
        appointment_firstname = mySharedPreferences.getString("Appointment_FirstName", "");
        appointment_lastname = mySharedPreferences.getString("Appointment_LastName", "");
        appointment_title = mySharedPreferences.getString("Appointment_Title", "");
        appointment_language = mySharedPreferences.getString("Appointment_Language", "");
        appointment_specialty = mySharedPreferences.getString("Appointment_Specialty", "");
        appointment_provider = mySharedPreferences.getString("Appointment_Provider", "");
        appointment_phone = mySharedPreferences.getString("Appointment_Phone", "");
        appointment_email = mySharedPreferences.getString("Appointment_Email", "");
        appointment_image = mySharedPreferences.getString("Appointment_Image", "");
        appointment_address1 = mySharedPreferences.getString("Appointment_Address1", "");
        appointment_address2 = mySharedPreferences.getString("Appointment_Address2", "");
        appointment_city = mySharedPreferences.getString("Appointment_City", "");
        appointment_state = mySharedPreferences.getString("Appointment_State", "");
        appointment_zipcode = mySharedPreferences.getString("Appointment_Zipcode", "");



//        Log.d(TAG, "Value: " + time_slot );
//        Log.d(TAG, "Value: " + appointment_date );
//        Log.d(TAG, "Value: " + appointment_firstname );
//        Log.d(TAG, "Value: " + appointment_lastname );
//        Log.d(TAG, "Value: " + appointment_title );
//        Log.d(TAG, "Value: " + appointment_language );
//        Log.d(TAG, "Value: " + appointment_specialty );
//        Log.d(TAG, "Value: " + appointment_provider );
//        Log.d(TAG, "Value: " + appointment_phone );
//        Log.d(TAG, "Value: " + appointment_email );
//        Log.d(TAG, "Value: " + appointment_image );
//        Log.d(TAG, "Value: " + appointment_address1 );
//        Log.d(TAG, "Value: " + appointment_address2 );
//        Log.d(TAG, "Value: " + appointment_city );
//        Log.d(TAG, "Value: " + appointment_state );
//        Log.d(TAG, "Value: " + appointment_zipcode );

        FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();
        patient_username = user.getEmail();
//        Log.d(TAG, "Value: " + patient_username );
        reference = FirebaseDatabase.getInstance().getReference().child("AccountProfile");
        reference.orderByChild("email").equalTo(patient_username).addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                for(DataSnapshot datas: dataSnapshot.getChildren()){
                    patient_firstname=datas.child("firstname").getValue().toString();
                    patient_lastname=datas.child("lastname").getValue().toString();
                }
                patient_firstname_lowercase = patient_firstname.toLowerCase();
                patient_lastname_lowercase = patient_lastname.toLowerCase();
                patient_fullname_lowercase = patient_firstname_lowercase + patient_lastname_lowercase;
                patient_fullname = "Thank you " + patient_firstname + " " + patient_lastname;
//                Log.d(TAG, "Value: " + patient_firstname );
//                Log.d(TAG, "Value: " + patient_lastname );
//                Log.d(TAG, "Value: " + patient_fullname_lowercase );
//                Log.d(TAG, "Value: " + patient_fullname );
                confirmation_title.setText(patient_fullname);
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {
                Toast.makeText(AppointmentConfirmationActivity.this, "Opsss.... Something is wrong", Toast.LENGTH_SHORT).show();
            }
        });

        booking_time.setText(time_slot);
        booking_date.setText(appointment_date);
        appointment_patient_firstname.setText(patient_firstname);
        appointment_patient_lastname.setText(patient_lastname);
        Picasso.get().load(appointment_image).into(appointment_provider_image);
        provider_fullname = appointment_title + " " + appointment_firstname + " " + appointment_lastname;
        appointment_provider_fullname.setText(provider_fullname);
        provider_address_line1 = appointment_address1 + ", " + appointment_address2;
        appointment_provider_address1.setText(provider_address_line1);
        provider_address_line2 = appointment_city + ", " + appointment_state + ", " + appointment_zipcode;
        appointment_provider_address2.setText(provider_address_line2);
        provider_phone_number = "Provider's Phone Number: " + appointment_phone;
        appointment_provider_phone.setText(provider_phone_number);
        provider_email_address = "Provider's Email Address: " + appointment_email;
        appointment_provider_email.setText(provider_email_address);

        appointment_confirm_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                progressBar.setVisibility(View.VISIBLE);
                Log.d(TAG, "Value: " + patient_firstname );
                Log.d(TAG, "Value: " + patient_lastname );
                Log.d(TAG, "Value: " + patient_fullname_lowercase );
                Log.d(TAG, "Value: " + patient_fullname );
                reference = FirebaseDatabase.getInstance().getReference().child("Appointment/" + patient_fullname_lowercase + "/" + appointment_date);
                reference.child("patient_firstname").setValue(patient_firstname);
                reference.child("patient_lastname").setValue(patient_lastname);
                reference.child("date").setValue(appointment_date);
                reference.child("timeslot").setValue(time_slot);
                reference.child("provider_firstname").setValue(appointment_firstname);
                reference.child("provider_lastname").setValue(appointment_lastname);
                reference.child("status").setValue(status);
                Intent intent = new Intent(AppointmentConfirmationActivity.this, MainActivity.class);
                startActivity(intent);
                Toast.makeText(AppointmentConfirmationActivity.this, "Appointment confirmed successful", Toast.LENGTH_SHORT).show();
                progressBar.setVisibility(View.GONE);
            }
        });
    }

    private void initializeUI() {
        confirmation_title = findViewById(R.id.confirmation_title);
        appointment_patient_firstname = findViewById(R.id.appointment_patient_firstname);
        appointment_patient_lastname = findViewById(R.id.appointment_patient_lastname);
        booking_time = findViewById(R.id.appointment_time);
        booking_date = findViewById(R.id.appointment_date);
        appointment_provider_image = findViewById(R.id.appointment_provider_image);
        appointment_provider_fullname = findViewById(R.id.appointment_provider_name);
        appointment_provider_address1 = findViewById(R.id.appointment_provider_address_line1);
        appointment_provider_address2 = findViewById(R.id.appointment_provider_address_line2);
        appointment_provider_phone = findViewById(R.id.appointment_provider_phone);
        appointment_provider_email = findViewById(R.id.appointment_provider_email);
        appointment_confirm_btn = findViewById(R.id.confirm_btn);
        progressBar = findViewById(R.id.progressBar);
    }
}
