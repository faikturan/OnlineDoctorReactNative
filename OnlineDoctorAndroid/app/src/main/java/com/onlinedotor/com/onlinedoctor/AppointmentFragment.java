package com.onlinedotor.com.onlinedoctor;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;

public class AppointmentFragment extends Fragment {

    DatabaseReference reference;
    RecyclerView recyclerView;
    ArrayList<Appointment> list;
    AppointmentAdaptor adaptor;

    private static final String TAG = "AppointmentFragment";

    private String patient_username;
    private String patient_firstname;
    private String patient_lastname;
    private String patient_firstname_lowercase;
    private String patient_lastname_lowercase;
    private String patient_fullname_lowercase;

    private Button addNewAppointmentBtn, previousAppointmentBtn, upcmoingAppointmentBtn;
    private ProgressBar progressBar;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_appointment, container, false);
        addNewAppointmentBtn = view.findViewById(R.id.addNewAppointment);
        progressBar = view.findViewById(R.id.progressBar);
        previousAppointmentBtn = view.findViewById(R.id.previous_appointment_btn);

        FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();
        patient_username = user.getEmail();
        Log.d(TAG, "Value: " + patient_username );
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
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {
                Toast.makeText(getActivity(), "Opsss.... Something is wrong", Toast.LENGTH_SHORT).show();
            }
        });

//        recyclerView = (RecyclerView) view.findViewById(R.id.appointmentRecycler);
//        recyclerView.setLayoutManager(new LinearLayoutManager(getActivity()));
//        list = new ArrayList<Appointment>();


        addNewAppointmentBtn.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                addNewAppointment();
            }
        });

        previousAppointmentBtn = view.findViewById(R.id.previous_appointment_btn);
        previousAppointmentBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.d(TAG, "Value: " + patient_fullname_lowercase );
                recyclerView = (RecyclerView) view.findViewById(R.id.appointmentRecycler);
                recyclerView.setLayoutManager(new LinearLayoutManager(getActivity()));
                list = new ArrayList<Appointment>();

                reference = FirebaseDatabase.getInstance().getReference().child("Appointment/" + patient_fullname_lowercase);
                reference.addValueEventListener(new ValueEventListener() {
                    @Override
                    public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                        list = new ArrayList<Appointment>();
                        for(DataSnapshot dataSnapshot1:dataSnapshot.getChildren()){
                            Appointment a = dataSnapshot1.getValue(Appointment.class);
                            list.add(a);
                        }
                        adaptor = new AppointmentAdaptor(getActivity(), list);
                        recyclerView.setAdapter(adaptor);
                    }

                    @Override
                    public void onCancelled(@NonNull DatabaseError databaseError) {
                        Toast.makeText(getActivity(), "Opsss.... Something is wrong", Toast.LENGTH_SHORT).show();
                    }

                });
            }
        });

//        upcmoingAppointmentBtn = view.findViewById(R.id.upcoming_appointment_btn);
//        upcmoingAppointmentBtn.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//
//                recyclerView = (RecyclerView) view.findViewById(R.id.appointmentRecycler);
//                recyclerView.setLayoutManager(new LinearLayoutManager(getActivity()));
//                list = new ArrayList<Appointment>();
//
//                reference = FirebaseDatabase.getInstance().getReference().child("Appointment/" + patient_fullname_lowercase);
//                reference.addValueEventListener(new ValueEventListener() {
//                    @Override
//                    public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
//                        list = new ArrayList<Appointment>();
//                        for(DataSnapshot dataSnapshot1:dataSnapshot.getChildren()){
//                            Appointment a = dataSnapshot1.getValue(Appointment.class);
//                            list.add(a);
//                        }
//                        adaptor = new AppointmentAdaptor(getActivity(), list);
//                        recyclerView.setAdapter(adaptor);
//                    }
//
//                    @Override
//                    public void onCancelled(@NonNull DatabaseError databaseError) {
//                        Toast.makeText(getActivity(), "Opsss.... Something is wrong", Toast.LENGTH_SHORT).show();
//                    }
//
//                });
//            }
//        });
        return view;
    }

    public void addNewAppointment(){
        progressBar.setVisibility(View.VISIBLE);
        Intent intent = new Intent(getActivity(), ProviderListActivity.class);
        startActivity(intent);
        progressBar.setVisibility(View.GONE);
    }

//    public void previous_appointment() {
//        reference = FirebaseDatabase.getInstance().getReference().child("Appointment/" + patient_fullname_lowercase);
//        reference.addValueEventListener(new ValueEventListener() {
//            @Override
//            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
//                list = new ArrayList<Appointment>();
//                for(DataSnapshot dataSnapshot1:dataSnapshot.getChildren()){
//                    Appointment a = dataSnapshot1.getValue(Appointment.class);
//                    list.add(a);
//                }
//                adaptor = new AppointmentAdaptor(getActivity(), list);
//                recyclerView.setAdapter(adaptor);
//            }
//
//            @Override
//            public void onCancelled(@NonNull DatabaseError databaseError) {
//                Toast.makeText(getActivity(), "Opsss.... Something is wrong", Toast.LENGTH_SHORT).show();
//            }
//
//        });
//    }
//
//    public void upcoming_appointment() {
//        reference = FirebaseDatabase.getInstance().getReference().child("Appointment/" + patient_fullname_lowercase);
//        reference.addValueEventListener(new ValueEventListener() {
//            @Override
//            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
//                list = new ArrayList<Appointment>();
//                for(DataSnapshot dataSnapshot1:dataSnapshot.getChildren()){
//                    Appointment a = dataSnapshot1.getValue(Appointment.class);
//                    list.add(a);
//                }
//                adaptor = new AppointmentAdaptor(getActivity(), list);
//                recyclerView.setAdapter(adaptor);
//            }
//
//            @Override
//            public void onCancelled(@NonNull DatabaseError databaseError) {
//                Toast.makeText(getActivity(), "Opsss.... Something is wrong", Toast.LENGTH_SHORT).show();
//            }
//
//        });
//    }
}
