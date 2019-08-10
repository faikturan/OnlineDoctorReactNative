package com.onlinedotor.com.onlinedoctor;

import android.content.Context;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.RecyclerView.ViewHolder;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.squareup.picasso.Picasso;

import java.util.ArrayList;

public class ProviderTimeSlotAdaptor extends RecyclerView.Adapter<ProviderTimeSlotAdaptor.ProviderTimeSlotViewHolder> {


    Context context;
    ArrayList<Provider_TimeSlot> provider_time_slot;

    public ProviderTimeSlotAdaptor(Context c_pts, ArrayList<Provider_TimeSlot> pts){
        context = c_pts;
        provider_time_slot = pts;
    }


    @NonNull
    @Override
    public ProviderTimeSlotViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new ProviderTimeSlotViewHolder(LayoutInflater.from(context).inflate(R.layout.provider_timeslot_item, parent,false));
    }

    @Override
    public void onBindViewHolder(@NonNull final ProviderTimeSlotViewHolder holder, final int position) {
        holder.provider_timeslots.setText(provider_time_slot.get(position).getSlot());


    }

    @Override
    public int getItemCount() {
        return provider_time_slot.size();
    }

    class ProviderTimeSlotViewHolder extends RecyclerView.ViewHolder{
        TextView provider_timeslots;

        public ProviderTimeSlotViewHolder(View itemView){
            super(itemView);
            provider_timeslots = (TextView) itemView.findViewById(R.id.provider_timeslot);
        }
    }
}

