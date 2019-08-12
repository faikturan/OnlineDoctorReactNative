package com.onlinedotor.com.onlinedoctor;

import android.content.Context;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.ArrayList;

public class AppointmentAdaptor extends RecyclerView.Adapter<AppointmentAdaptor.AppointmentViewHolder> {

    Context context;
    ArrayList<Appointment> appointments;

    public AppointmentAdaptor(Context c, ArrayList<Appointment> a){
        context = c;
        appointments = a;
    }

    @NonNull
    @Override
    public AppointmentViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new AppointmentAdaptor.AppointmentViewHolder(LayoutInflater.from(context).inflate(R.layout.activity_appointment_item, parent,false));
    }

    @Override
    public void onBindViewHolder(@NonNull AppointmentViewHolder appointmentViewHolder, final int position) {
        appointmentViewHolder.patient_firstname_textview.setText(appointments.get(position).getPatient_firstname());
        appointmentViewHolder.patient_lastname_textview.setText(appointments.get(position).getPatient_lastname());
        appointmentViewHolder.provider_firstname_textview.setText(appointments.get(position).getProvider_firstname());
        appointmentViewHolder.provider_lastname_textview.setText(appointments.get(position).getProvider_lastname());
        appointmentViewHolder.appointment_timeslot.setText(appointments.get(position).getTimeslot());
        appointmentViewHolder.appointment_date.setText(appointments.get(position).getDate());
        appointmentViewHolder.appointment_status.setText(appointments.get(position).getStatus());

        appointmentViewHolder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String ClickedProviderTimeSlot = appointments.get(position).getTimeslot();

                Intent intent = new Intent(view.getContext(), AppointmentConfirmationActivity.class);
                intent.putExtra("ClickedProviderTimeSlot", ClickedProviderTimeSlot);
                view.getContext().startActivity(intent);
            }
        });
    }

    @Override
    public int getItemCount() {
        return appointments.size();
    }

    class AppointmentViewHolder extends RecyclerView.ViewHolder {

        TextView patient_firstname_textview;
        TextView patient_lastname_textview;
        TextView provider_firstname_textview;
        TextView provider_lastname_textview;
        TextView appointment_timeslot;
        TextView appointment_date;
        TextView appointment_status;

        public AppointmentViewHolder(@NonNull View itemView) {
            super(itemView);
            patient_firstname_textview = (TextView) itemView.findViewById(R.id.patient_firstname_textview);
            patient_lastname_textview = (TextView) itemView.findViewById(R.id.patient_lastname_textview);
            provider_firstname_textview = (TextView) itemView.findViewById(R.id.provider_firstname_textview);
            provider_lastname_textview = (TextView) itemView.findViewById(R.id.provider_lastname_textview);
            appointment_timeslot = (TextView) itemView.findViewById(R.id.appointment_timeslot);
            appointment_date = (TextView) itemView.findViewById(R.id.appointment_date);
            appointment_status = (TextView) itemView.findViewById(R.id.appointment_status);
        }
    }
}
