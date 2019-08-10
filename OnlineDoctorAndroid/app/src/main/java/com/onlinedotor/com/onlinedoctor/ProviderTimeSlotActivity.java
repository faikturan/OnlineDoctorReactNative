package com.onlinedotor.com.onlinedoctor;

import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;
import android.widget.CalendarView;
import android.widget.ListView;
import android.widget.Toast;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;
import java.util.Calendar;

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

    private static final String TAG = "ProviderTimeSlotActivity";
    private CalendarView mCalendarView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_provider_timeslot);

        Bundle recdData = getIntent().getExtras();
        firstname = recdData.getString("Provider_Firstname").toLowerCase();
        lastname = recdData.getString("Provider_Lastname").toLowerCase();
        fullname = firstname + lastname;

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
                Log.d(TAG, "Value: " + date);
                Log.d(TAG, "Value: " + fullname);
            }
        });

        Log.d(TAG, "Value: " + "Hello111");
        recyclerView = (RecyclerView) findViewById(R.id.timeslot_recycler);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        lists = new ArrayList<Provider_TimeSlot>();

        reference = FirebaseDatabase.getInstance().getReference().child("Appointment/" + fullname + '/' + date);
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
}
