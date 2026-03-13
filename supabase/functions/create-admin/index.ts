import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Create admin user
    const { data: userData, error: userError } = await supabaseAdmin.auth.admin.createUser({
      email: "admin@credenceconsultingcorp.com",
      password: "Admin1234",
      email_confirm: true,
    });

    if (userError && !userError.message.includes("already been registered")) {
      throw userError;
    }

    let userId = userData?.user?.id;

    if (!userId) {
      // User already exists, get their id
      const { data: users } = await supabaseAdmin.auth.admin.listUsers();
      const existing = users?.users?.find((u: any) => u.email === "admin@credenceconsultingcorp.com");
      userId = existing?.id;
    }

    if (!userId) throw new Error("Could not find or create admin user");

    // Assign admin role
    const { error: roleError } = await supabaseAdmin
      .from("user_roles")
      .upsert({ user_id: userId, role: "admin" }, { onConflict: "user_id,role" });

    if (roleError) throw roleError;

    return new Response(JSON.stringify({ success: true, userId }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
