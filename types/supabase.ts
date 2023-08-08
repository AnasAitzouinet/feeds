export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Costumers: {
        Row: {
          address: string | null
          created_at: string
          id: string
          new_Acc: boolean | null
          order_id: number | null
          order_type: string | null
          phone_number: number | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          id?: string
          new_Acc?: boolean | null
          order_id?: number | null
          order_type?: string | null
          phone_number?: number | null
        }
        Update: {
          address?: string | null
          created_at?: string
          id?: string
          new_Acc?: boolean | null
          order_id?: number | null
          order_type?: string | null
          phone_number?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Costumers_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          }
        ]
      }
      orders: {
        Row: {
          arriving_date: string | null
          created_at: string
          id: number
          items: Json | null
          price: number | null
          user_id: string | null
          weight: string | null
        }
        Insert: {
          arriving_date?: string | null
          created_at?: string
          id?: number
          items?: Json | null
          price?: number | null
          user_id?: string | null
          weight?: string | null
        }
        Update: {
          arriving_date?: string | null
          created_at?: string
          id?: number
          items?: Json | null
          price?: number | null
          user_id?: string | null
          weight?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "Costumers"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          userid: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          userid?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          userid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_userid_fkey"
            columns: ["userid"]
            referencedRelation: "Costumers"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
