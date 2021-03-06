package com.onlinedotor.com.onlinedoctor;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.widget.CalendarView;

import android.widget.Toast;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;

public class ProviderTimeSlotActivity extends AppCompatActivity {

    DatabaseReference reference;
    RecyclerView recyclerView;
    ArrayList<Provider_TimeSlot> lists;
    ProviderTimeSlotAdaptor timeslot_adaptor;

    private String firstname;
    private String lastname;
    private String fullname;
    private String date;
    private String empty = "";
    private String slot;
    private String title;
    private String language;
    private String specialty;
    private String provider;
    private String image;
    private String phone;
    private String email;
    private String address1;
    private String address2;
    private String city;
    private String state;
    private String zipcode;

    private static final String TAG = "ProviderTimeSlotActivity";
    private CalendarView mCalendarView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_provider_timeslot);

        Bundle recdData = getIntent().getExtras();
        firstname = recdData.getString("Provider_Firstname");
        lastname = recdData.getString("Provider_Lastname");
        fullname = firstname.toLowerCase() + lastname.toLowerCase();

        title = recdData.getString("Provider_Title");
        language = recdData.getString("Provider_Language");
        specialty = recdData.getString("Provider_Specialty");
        provider = recdData.getString("Provider_Provider");
        image = recdData.getString("Provider_Image");
        phone = recdData.getString("Provider_Phone");
        email = recdData.getString("Provider_Email");
        address1 = recdData.getString("Provider_Address1");
        address2 = recdData.getString("Provider_Address2");
        city = recdData.getString("Provider_City");
        state = recdData.getString("Provider_State");
        zipcode = recdData.getString("Provider_Zipcode");

        mCalendarView = (CalendarView) findViewById(R.id.calendarView);

        mCalendarView.setOnDateChangeListener(new CalendarView.OnDateChangeListener() {
            @Override
            public void onSelectedDayChange(CalendarView calendarView, int year, int month, int dayOfMonth) {

                if(month < 9 && dayOfMonth < 10){
                    date = year + "-" + "0" + (month + 1) + "-" + "0" + dayOfMonth;
                }else if(month >= 9 && dayOfMonth < 10){
                    date = year + "-" + (month + 1) + "-" + "0" + dayOfMonth;
                }else if(month < 9 && dayOfMonth > 10){
                    date = year + "-" + "0" + (month + 1) + "-" + dayOfMonth;
                } else if (month < 9 && dayOfMonth == 10) {
                    date = year + "-" + "0" + (month + 1) + "-" + dayOfMonth;
                } else {
                    date = year + "-" + (month + 1) + "-" + dayOfMonth;
                }
//                Log.d(TAG, "Value: " + date);
//                Log.d(TAG, "Value: " + fullname);

//                Intent intent = new Intent(ProviderTimeSlotActivity.this, AppointmentConfirmationActivity.class);
//                intent.putExtra("Appointment_Date", date);
                SharedPreferences mySharedPreferences = getApplicationContext().getSharedPreferences("MYPREFERENCENAME", Context.MODE_PRIVATE);
                SharedPreferences.Editor editor = mySharedPreferences.edit();
                editor.putString("Appointment_Date",date);
                editor.putString("Appointment_FirstName",firstname);
                editor.putString("Appointment_LastName",lastname);
                editor.putString("Appointment_Title",title);
                editor.putString("Appointment_Phone",phone);
                editor.putString("Appointment_Email",email);
                editor.putString("Appointment_Provider",provider);
                editor.putString("Appointment_Specialty",specialty);
                editor.putString("Appointment_Language",language);
                editor.putString("Appointment_Address1",address1);
                editor.putString("Appointment_Address2",address2);
                editor.putString("Appointment_City",city);
                editor.putString("Appointment_State",state);
                editor.putString("Appointment_Zipcode",zipcode);
                editor.putString("Appointment_Image",image);
                editor.apply();

                recyclerView = (RecyclerView) findViewById(R.id.timeslot_recycler);
                recyclerView.setLayoutManager(new LinearLayoutManager(ProviderTimeSlotActivity.this));

                lists = new ArrayList<Provider_TimeSlot>();

                reference = FirebaseDatabase.getInstance().getReference().child("Appointment/" + fullname + '/' + date);
//                Log.d(TAG, "Value: " + "Appointment/" + fullname + '/' + date);
                reference.addValueEventListener(new ValueEventListener() {
                    @Override
                    public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                        lists = new ArrayList<Provider_TimeSlot>();
                        for (DataSnapshot dataSnapshot1 : dataSnapshot.getChildren()) {
                            Provider_TimeSlot pts = dataSnapshot1.getValue(Provider_TimeSlot.class);
                            lists.add(pts);
                        }
                        timeslot_adaptor = new ProviderTimeSlotAdaptor(ProviderTimeSlotActivity.this, lists);
                        recyclerView.setAdapter(timeslot_adaptor);
                    }

                    @Override
                    public void onCancelled(@NonNull DatabaseError databaseError) {
                        Toast.makeText(ProviderTimeSlotActivity.this, "Opsss.... Something is wrong", Toast.LENGTH_SHORT).show();
                    }
                });

            }
        });
    }
}
